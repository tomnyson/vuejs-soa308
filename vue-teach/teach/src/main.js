import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/styles.css"
import "./assets/js/scripts"
import router from './route'

createApp(App).use(router).mount('#app')
