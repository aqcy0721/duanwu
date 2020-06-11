import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import adaptive from 'adaptive.js'
import axios from 'axios'
adaptive.init();
Vue.prototype.$axios = axios;
Vue.prototype.$domain = "http://lj-xcx.mb5u.com";
Vue.prototype.$openid = localStorage['openid'];
import './common/stylus/index.styl'
fastclick.attach(document.body);
const openid = localStorage.getItem('jm_vote_token');
if(!openid){
  axios.post('http://jmgzh.jo.cn/yx/vote_zhu/YTC8Kvp3E4ElM1N3Qor',{openid:1234}).then(function (response) {
    let _data = response.data
    if (_data.code == "1") {

    }
  })
}
new Vue({
	el: '#app',
	render: h => h(App),
	router
});

