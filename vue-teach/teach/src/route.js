import { createRouter, createWebHistory } from 'vue-router';
// create component cho tung man hinh
import Blog from './screens/Blog.vue';
import BlogDetail from './screens/BlogDetail.vue';

// dinh nghia routing
const routes = [
    {
        path: '',
        name: 'home',
        component: Blog,
    },
    {
        path: '/detail',
        name: 'detail',
        component: BlogDetail,
    }
]
// gan vao routes
const router = createRouter({
    history: createWebHistory(''),
    routes,
  });

  export default router;