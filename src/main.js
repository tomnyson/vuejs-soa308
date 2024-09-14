import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router'; // Import the router
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap';

const app = createApp(App);
app.use(router);
app.use(store);// Use the router in the application
app.mount('#app');