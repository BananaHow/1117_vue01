import { createApp } from 'vue'
// pinia 1
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
import 'bootstrap'


const app = createApp(App)
// pinia 2
const pinia = createPinia()


app.use(router)
// pinia 3
app.use(pinia)


app.mount('#app')
