import { createRouter, createWebHistory } from 'vue-router';
// create component cho tung man hinh
import Blog from './screens/Blog.vue';
import BlogDetail from './screens/BlogDetail.vue';
import Login from './screens/Login.vue';
import Register from './screens/Register.vue';

// dinh nghia routing
const routes = [
    {
        path: '/',
        name: 'home',
        component: Blog,
    },
    {
        path: '/blogs',
        name: 'blogs',
        component: Blog,
    },
    {
        path: '/blogs/:id',
        name: 'detail',
        component: BlogDetail,
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'register',
        component: Register,
    }
]
// gan vao routes
const router = createRouter({
    history: createWebHistory(''),
    routes,
  });

  export default router;