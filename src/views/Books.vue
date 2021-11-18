<template>
  <div>
    <Loading v-if="loading" />
    <h3 v-else>{{ title }}</h3>
    <BookList :list = "books"  v-if="books.length"/>
    <h1>{{ message }}</h1>
    <el-pagination
      :hide-on-single-page="true"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="pageNum"
      :page-sizes="[2, 10, 20, 40]" 
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
  import BookList from "@/components/BookList"
  import Loading from '@/components/Loading.vue'
  export default {
    name: 'Books',
    data () {
      return {
        title: '',
        books: [],
        message: '',
        loading: true,
        total: 5,
        pageNum: 1,
        pageSize: 2
      };
    },

    beforeRouteEnter(to, from, next){
      next(vm => {
        vm.title = to.meta.title;
        let url = vm.setRequestUrl(to.fullPath);
        //vm.getBooks(url);
        vm.getBooks(url, vm.pageNum, vm.pageSize);
      });
    },
    beforeRouteUpdate(to){
      let url = this.setRequestUrl(to.fullPath);
      //this.getBooks(url);
      this.getBooks(url, this.pageNum, this.pageSize);
      return true;
    },

    components: {
      BookList,
      Loading
    },

    methods: {
      getBooks(url, pageNum, pageSize){
        this.message = '';
        this.axios.get(url, {params: {pageNum, pageSize}})
          .then(response => {
            //if(response.status == 200){
            if(response.data.code == 200){
              this.loading = false;
              //this.books = response.data;
              this.books = response.data.data;
              this.total = response.data.total;
              if(this.books.length === 0){
                if(this.$route.name === "category")
                  this.message = "当前分类下没有图书！"
                else
                  this.message = "没有搜索到匹配的图书！"
              }
            }
          })
          .catch(error => alert(error));
      },
      //动态设置服务端数据接口的请求URL
      setRequestUrl(path){
        let url = path;
        if(path.indexOf("/category") != -1){
          //url = "/book" + url;
          url = "/book" + url + "/page";
        }
        return url;
      },
      //当修改了每页显示的条数时，重新请求数据
      handleSizeChange(selectedSize) {
          this.pageSize = selectedSize;
          let url = this.setRequestUrl(this.$route.fullPath);
          this.getBooks(url, this.pageNum, this.pageSize);
      },
     //当用户切换而选择了某一页时，重新请求数据
      handleCurrentChange(currentPage) {
          this.pageNum = currentPage
          let url = this.setRequestUrl(this.$route.fullPath);
          this.getBooks(url, this.pageNum, this.pageSize)
      },
    }
  }
</script>
<style scoped>
</style>