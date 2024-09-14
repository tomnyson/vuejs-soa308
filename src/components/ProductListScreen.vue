<template>
  <div class="container">
    <h1>Product List</h1>
    <div class="row gutter-3" v-if="products.length">
      <div class="col-md-3" v-for="item in products" :key="item.id">
        <div class="card">
          <img :src="item.image" class="card-img-top" :alt="item.title" />
          <div class="card-body">
            <router-link :to="`/products/${item.id}`">
            <h5 class="card-title">{{ item.title }}</h5>
            </router-link>
           
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text"><strong>Price:</strong> ${{ item.price }}</p>
            <p class="card-text"><strong>Category:</strong> {{ item.category }}</p>
            <p class="card-text"><strong>Quantity:</strong> {{ item.quantity }}</p>
            <button @click="addItemCart(item)"  class="btn btn-primary">Add to Cart</button>
          </div>
        </div>
        </div>
      </div>
    <p v-else>Loading products...</p>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      products: [], // Danh sách người dùng từ API
    };
  },
  mounted() {
    this.fetchProducts(); // Gọi API ngay khi component được mount
  },
  methods: {
    async fetchProducts() {
      const url = process.env.VUE_APP_BASE_URL + '/products';
      try {
        const response = await axios.get(url);
        if(response.data.length > 0) {
          this.products = response.data
        }

      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions(['addToCart']),
    addItemCart(product) {
      this.addToCart({ ...product, quantity: 1 });
    },
 
  }
};
</script>