import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

import AOS from 'aos'
import 'aos/dist/aos.css'

import './assets/main.css'






const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

AOS.init()
