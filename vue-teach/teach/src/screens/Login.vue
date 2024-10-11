
<script>
import { onMounted, ref  } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'
export default {
    setup() {
        const email = ref("")
        const password = ref("")
        const router = useRouter()
        const onSubmit = async () => {
            const response = await axios.get(`http://localhost:3000/users?email=${email.value}&password=${password.value}`)
            if(response.data.length > 0) {
                localStorage.setItem('user', JSON.stringify(response.data[0]));
                alert("dang nhap thanh cong")
                router.push({name: 'blogs'})
            } else {
                alert("dang nhap that bai")
            }
        }
        return {name, email, password, onSubmit}
    }
}
</script>
<template>
    <div class="container">
  <div class="row justify-content-center">
    <div class="col-md-4">
      <h3 class="text-center mt-5">Login</h3>
      <form @submit.prevent="onSubmit">
        <div class="mb-3">
          <label for="Email" class="form-label">Email</label>
          <input v-model="email" type="Email" class="form-control" id="username" placeholder="Enter username">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter password">
        </div>
        <div class="d-grid gap-2">
          <button type="submit" class="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>