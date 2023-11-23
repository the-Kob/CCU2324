import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import Home from '@/components/Home.vue'
import Deliverables from '@/components/Deliverables.vue'
import WeeklyReports from '@/components/WeeklyReports.vue'


const routes = [
    { 
        path: '/CCU2324/', 
        component: Home 
    },
    { 
        path: '/CCU2324/deliverables',
        name: 'deliverables',
        component: Deliverables,
    },
    { 
        path: '/CCU2324/weekly-reports', 
        name: 'weekly-reports',
        component: WeeklyReports,
    },
]
  
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
