import { createStore } from 'vuex';

// Helper function to save state to localStorage
function saveStateToLocalStorage(state) {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }
  
  // Helper function to load state from localStorage
  function loadStateFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  }

export default createStore({
  state: {
    cart: loadStateFromLocalStorage(),
  },
  mutations: {
    // Add a product to the cart
    ADD_TO_CART(state, product) {
      const item = state.cart.find((item) => item.id === product.id);
      if (item) {
        item.quantity += product.quantity; // Update quantity if already in cart
      } else {
        state.cart.push(product);
      }
    },
    // Remove a product from the cart
    REMOVE_FROM_CART(state, productId) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
    // Update product quantity in the cart
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.cart.find((item) => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    // Clear the cart
    CLEAR_CART(state) {
      state.cart = [];
    },
  },
  actions: {
    // Define the addToCart action here
    addToCart({ commit }, product) {
     
      commit('ADD_TO_CART', product);
      saveStateToLocalStorage(this.state) 
      console.log('Add to cart', this.state.cart)
    },
    removeFromCart({ commit }, productId) {
      commit('REMOVE_FROM_CART', productId);
      saveStateToLocalStorage(this.state) 
    },
    updateQuantity({ commit }, { productId, quantity }) {
      commit('UPDATE_QUANTITY', { productId, quantity });
      saveStateToLocalStorage(this.state) 
    },
  },
  getters: {
    // Get the total number of products in the cart
    cartItemCount: (state) => {
      return state.cart.reduce((total, item) => total + item.quantity, 0);
    },
    // Get the total price of the cart
    totalPrice: (state) => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
    },
    // Get the cart items
    cartItems: (state) => {
      return state.cart;
    },
  },
});