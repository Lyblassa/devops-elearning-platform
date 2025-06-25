import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import HomeView from '../views/HomeView.vue'
import AllCoursesView from '../views/AllCoursesView.vue'
import CategoryCoursesView from '../views/CategoryCoursesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/auth', name: 'auth', component: AuthView },
    { path: '/cours', name: 'all-courses', component: AllCoursesView },
    {
      path: '/:categorieSlug',
      name: 'category-courses',
      component: CategoryCoursesView,
    },
  ],
})
export default router
