<template>
    <div class="container">
      <h1>Login Form</h1>
      <form @submit.prevent="loginUser">
        <div>
          <label for="username">Username:</label>
          <input class="form form-control" type="text" id="username" v-model="username" required>
        </div>
  
        <div>
          <label for="password">Password:</label>
          <input class="form form-control" type="password" id="password" v-model="password" required>
        </div>
  
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
  
      <!-- Hiển thị thông báo -->
      <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
      <p v-if="successMessage" style="color: green;">{{ successMessage }}</p>
    </div>
  </template>
  
  <script>
  import axios from "axios"

  export default {
    data() {
      return {
        username: '',      // Trạng thái cho tên đăng nhập
        password: '',      // Trạng thái cho mật khẩu
        errorMessage: '',
        successMessage: ''   // Thông báo lỗi nếu đăng nhập thất bại
      };
    },
    methods: {
      async loginUser() {
      console.log('register called',`${process.env.VUE_APP_BASE_URL}/users`, );
      const payload = {
        username: this.username,
        password: this.password
      }

      const queryString = Object.keys(payload)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(payload[key])}`)
    .join('&');


      try {
        const response = await axios.get(`${process.env.VUE_APP_BASE_URL}/users?${queryString}`, payload)
        console.log(response)

        if(response.data.length > 0) {
          localStorage.setItem('authToken', true);
          this.successMessage = 'Login successful!';
          this.$router.push('/')
        }else {
          this.errorMessage = 'Login failed!';
        }
        

        this.email = '';
        this.password = '';

      } catch (error) {
        console.error(error)
        this.errorMessage = 'Login failed!';

      }
    }
  }
  }
  </script>
  
  <style scoped>
  
  </style>