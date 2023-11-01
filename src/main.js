/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Axios
import axios from 'axios'
import VueAxios from 'vue-axios'

axios.defaults.baseURL = 'https://appfunc-fcf1a-default-rtdb.firebaseio.com/'

const app = createApp(App)

registerPlugins(app)
app.use(VueAxios, axios)

app.mount('#app')
