import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import axios from 'axios'

createApp(App).use(router).mount('#app')
axios.defaults.baseURL = 'http://192.168.100.187:5000/api'
axios.defaults.headers.common["Authorization"] = localStorage.getItem(JSON.parse(localStorage.getItem("calbona")))