<template>
  <div class="scrollPic">
         <img id="image" src="/ad01.jpg">
<!-- <img   src="/ad02.jpg"> -->
<!-- 
    <span @click="togle">
    <img :src=" this.i == 0 ? srcs : nosrc" alt="">
</span>-->  </div> 
</template>
<script>
    window.onload = function () {
        var imgs = Array("/ad01.jpg", "/ad02.jpg", "/ad03.jpg", "/ad04.jpg");
        var image = document.getElementById("image");
        var i = 0;
        setInterval(function () {
             if(i <= 3){
                 image.src = imgs[i];
                 i++;
             }else{
                 i = 0;
             }
        }, 500);
    }
export default{
   }; 
    
</script>
<style scoped>
.scrollPic {
  width: 610px;
  height: 220px; 
  float: left;
  margin: 10px 50px auto 50px;
}
.scrollPic img {
  width: 600px;
  height: 250px;
}
#image{
        margin: 10px auto;
    
        display: block;
    }
</style>