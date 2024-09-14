<template>
  <div class="container">
    <h1>Register Form</h1>
    <form @submit.prevent="registerUser">
      <div>
        <label for="username">Username:</label>
        <input class="form form-control" type="text" id="username" v-model="username" required>
      </div>

      <div>
        <label for="password">Password:</label>
        <input class="form form-control" type="password" id="password" v-model="password" required>
      </div>

      <button class="btn btn-primary" type="submit">Register</button>
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
      successMessage: ''  // Thông báo lỗi nếu đăng nhập thất bại
    };
  },
  methods: {
    async registerUser() {
      console.log('register called',`${process.env.VUE_APP_BASE_URL}/users`, );
      const payload = {
        username: this.username,
        password: this.password
      }
      try {
        const response = await axios.post(`${process.env.VUE_APP_BASE_URL}/users`, payload)
        console.log(response)
        this.successMessage = 'Registration successful!';

        this.email = '';
        this.password = '';

      } catch (error) {
        console.error(error)
        this.errorMessage = 'register failed!';

      }
    }
  }
}
</script>

<style scoped></style>