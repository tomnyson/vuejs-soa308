<template>
    <div class="container mt-5">
        <h2>Checkout</h2>

        <!-- Display Cart Summary -->
        <div v-if="cartItems.length === 0">
            <p>Your cart is empty. Please add items to your cart before checking out.</p>
        </div>

        <div v-else>
            <div class="row gutter-5">
                <div class="col-md-8">
                    <!-- Checkout Form -->
                    <h4 class="mt-5">Checkout Information</h4>
                    <form @submit.prevent="submitCheckout">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" v-model="name" id="name" class="form-control" required />
                        </div>

                        <div class="form-group mt-3">
                            <label for="email">Email</label>
                            <input type="email" v-model="email" id="email" class="form-control" required />
                        </div>

                        <div class="form-group mt-3">
                            <label for="address">Address</label>
                            <input type="text" v-model="address" id="address" class="form-control" required />
                        </div>
                        <div class="form-group mt-3">
                            <label for="address">Note</label>
                            <textarea class="form-control" v-model="note"></textarea>
                        </div>

                        <button class="btn btn-success mt-4">Place Order</button>
                    </form>

                    <div v-if="orderSuccess" class="alert alert-success mt-3">
                        Order placed successfully! Thank you for shopping with us.
                    </div>
                </div>
                <div class="col-md-4">
                    <table class="table mt-5">
                        <thead>
                            <tr>
                                <th>image</th>
                                <th>price</th>
                                <th>quantity</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item) in cartItems" :key="item.id">
                                <td> <img :src="item.image" class="img-fluid" :alt="item.title" /></td>
                                <td>
                                    <h5>{{ item.title }}</h5>
                                </td>
                                <td>
                                    <p>{{ item.quantity }}</p>
                                </td>
                                <td>
                                    <p>${{ (item.price * item.quantity).toFixed(2) }}</p>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td rowspan="4">Total: {{ totalPrice }}</td>
                            </tr>
                        </tfoot>
                    </table>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            name: '',
            email: '',
            address: '',
            note: '',
            orderSuccess: false, // To show success message after placing order
        };
    },
    computed: {
        ...mapGetters(['cartItems', 'totalPrice']),
    },
    methods: {
        ...mapActions(['clearCart']),
        submitCheckout() {
            // Simulate order submission
            console.log('Order details:', {
                name: this.name,
                email: this.email,
                address: this.address,
                cart: this.cartItems,
                total: this.totalPrice,
            });

            // Reset the form and clear the cart after "placing" the order
            this.clearCart();
            this.name = '';
            this.email = '';
            this.address = '';
            this.orderSuccess = true;
        },
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