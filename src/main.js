import './assets/main.css'

import { createApp } from 'vue'
import router from '@/router.js'
import Nav from '@/pages/nav.vue'

createApp(Nav)
    .use(router)
    .mount('#app')