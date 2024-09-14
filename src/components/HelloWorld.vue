<template>
  <div>
    <router-link to="/products">Product List</router-link>
    <h1>Users List</h1>
    <ul v-if="users.length">
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>

    <p v-else>Loading users...</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [], // Danh sách người dùng từ API
    };
  },
  mounted() {
    this.fetchUsers(); // Gọi API ngay khi component được mount
  },
  methods: {
    fetchUsers() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          this.users = response.data;
        })
        .catch((error) => {
          console.error('Error fetching users:', error);
        });
    },
  },
};
</script>