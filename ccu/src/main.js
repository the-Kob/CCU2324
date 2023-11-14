import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from '@/App.vue'
import Home from '@/components/Home.vue'
import AboutUs from '@/components/AboutUs.vue'
import Deliverables from '@/components/Deliverables.vue'
import Deliverable from '@/components/Deliverable.vue'
import WeeklyReports from '@/components/WeeklyReports.vue'
import Report from '@/components/Report.vue'


const routes = [
    { 
        path: '/', 
        component: Home 
    },
    { 
        path: '/deliverables', 
        component: Deliverables,
        children: [
            {
                path: ':id',
                component: Deliverable,
            },
        ]
    },
    { 
        path: '/weekly-reports', 
        name: 'weekly-reports',
        component: WeeklyReports,
    },
    { 
        path: '/about-us', 
        component: AboutUs 
    },
]
  
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
