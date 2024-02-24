import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// prettier就是不起作用? 可以了
import 'vant/lib/index.css'
import router from './router'
const app = createApp(App)
app.use(router)
app.mount('#app')
