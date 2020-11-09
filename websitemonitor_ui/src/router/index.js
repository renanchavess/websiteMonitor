import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path:'/',
    name: "List",
    component: () => import('../components/Site/ListSiteComponent'),
  },
  { 
    path:'/site',
    name: "ListAll",
    component: () => import('../components/Site/ListSiteComponent'),
  },
  { 
    path:'/site/:id',
    name: "Edit",
    component: () => import('../components/Site/EditSiteComponent'),
  },
  { 
    path:'/site/new',
    name: "Create",
    component: () => import('../components/Site/CreateSiteComponent'),
  },
  { 
    path:'/aviablehistory/:id',
    name: "Create",
    component: () => import('../components/SiteAviableHistory/ListAviableHistoryComponent'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
