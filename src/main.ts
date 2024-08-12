import './assets/main.css'

import { createApp } from 'vue';
import { createHead } from '@vueuse/head';
import { createPinia } from 'pinia';

import App from './App.vue'
const head = createHead()
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(head)
app.use(router)

app.mount('#app')
