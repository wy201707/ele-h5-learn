import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// prettier就是不起作用?
let a = 'a'
a = 101
createApp(App).mount('#app')
