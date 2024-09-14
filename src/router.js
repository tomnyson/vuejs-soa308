import { createRouter, createWebHistory } from 'vue-router';
import LoginScreen from './components/LoginScreen.vue';
import RegisterScreen from './components/RegisterScreen.vue'; // The component for the form
import HelloWorld from './components/HelloWorld.vue';
import ProductListScreen from './components/ProductListScreen.vue';
import ProductDetailScreen from './components/ProductDetailScreen.vue';
import CartScreen from './components/CartScreen.vue';
import CheckoutScreen from './components/CheckoutScreen.vue';
const routes = [

  {
    path: '/',
    name: 'HomeScreen',
    component: HelloWorld,
  },
  {
    path: '/products',
    name: 'ProductScreen',
    component: ProductListScreen,
  },
  {
    path: '/products/:id',
    name: 'ProductDetailScreen',
    component: ProductDetailScreen,
  },
  {
    path: '/login',
    name: 'LoginScreen',
    component: LoginScreen,
  },
  {
    path: '/register',
    name: 'RegisterScreen',
    component: RegisterScreen,
  },
  {
    path: '/carts',
    name: 'CartScreen',
    component: CartScreen,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: CheckoutScreen,
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


// Auth Navigation Guard
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if user is authenticated

  // If the route requires auth and the user is not logged in, redirect to login page
  if ((to.name !== 'LoginScreen' && to.name !== 'RegisterScreen') && !isAuthenticated) {
    next({ name: 'LoginScreen' });
  } else {
    next(); // Proceed to the route
  }
});


export default router;