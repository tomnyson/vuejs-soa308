<template>
    <div class="container mt-5">
      <h2>Your Cart</h2>
      <div v-if="cartItems.length === 0">
        <p>Your cart is empty.</p>
      </div>
  
      <div v-else>
        <div class="row mb-3" v-for="item in cartItems" :key="item.id">
          <div class="col-md-4">
            <img :src="item.image" class="img-fluid" :alt="item.title" />
          </div>
          <div class="col-md-8">
            <h5>{{ item.title }}</h5>
            <p><strong>Price:</strong> ${{ item.price }}</p>
            <p><strong>Quantity:</strong>
              <input
                type="number"
                v-model.number="item.quantity"
                @change="updateQuantity(item.id, item.quantity)"
                min="1"
                class="form-control"
                style="width: 70px; display: inline-block;"
              />
            </p>
            <p><strong>Total:</strong> ${{ (item.price * item.quantity).toFixed(2) }}</p>
            <button class="btn btn-danger" @click="removeFromCart(item.id)">Remove</button>
          </div>
        </div>
  
        <div class="mt-4">
          <h4>Total: ${{ totalPrice.toFixed(2) }}</h4>
        </div>
  
        <button @click="this.$router.push('/checkout')" class="btn btn-success mt-3">Proceed to Checkout</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  
  export default {
    computed: {
      ...mapGetters(['cartItems', 'totalPrice']),
    },
    methods: {
      ...mapActions(['removeFromCart', 'updateQuantity']),
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
  }
  
  .img-fluid {
    max-height: 150px;
  }
  </style>