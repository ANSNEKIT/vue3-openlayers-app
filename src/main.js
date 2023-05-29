import { createApp } from 'vue'
import OpenLayersMap from "vue3-openlayers"
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(OpenLayersMap)

app.mount('#app')
