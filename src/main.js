import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'
// import '../node_modules/element-plus/lib/theme-chalk/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
axios.defaults.baseURL = "/api"
createApp(App).use(store).use(router).use(VueAxios, axios).use(ElementPlus,{ locale }).mount('#app')
axios.defaults.withCredentials=true;
Response.setHeader("Access-Control-Allow-Origin","http://localhost8080");
Response.setHeader("Access-Control-Allow-Credentials","true");
// import ElementPlus from 'element-plus';
// import { ElPagination } from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
// //import locale from 'element-plus/lib/locale/lang/zh-cn'
// import lang from 'element-plus/lib/locale/lang/zh-cn'
// import locale from 'element-plus/lib/locale'

// axios.defaults.baseURL = "/api"

// // 使用中文语言
// locale.use(lang)

// //createApp(App).use(store).use(router).use(VueAxios, axios).use(ElementPlus,{ locale }).mount('#app')
// createApp(App).use(store).use(router).use(VueAxios, axios).use(ElPagination, { locale }).mount('#app')
