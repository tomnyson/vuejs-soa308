
<script>
import { onMounted, ref  } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router'
export default {
    setup() {

        const name = ref("")
        const email = ref("")
        const password = ref("")
        const router = useRouter()
        const onSubmit = async () => {
            console.log("test", name.value, email.value, password.value)
            const response = await axios.get(`http://localhost:3000/users?email=${email.value}`)
            if(response.data.length > 0) {
                alert("Email khong duoc trung")
            } else {
                const newuser ={ name:name.value, email:email.value, password:password.value}
                await axios.post("http://localhost:3000/users",newuser)
                alert("Ban Da Dang Ky Thanh Cong")
                router.push({ name: 'login' });
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
          <h3 class="text-center mt-5">Register</h3>
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label for="username" class="form-label">Name</label>
              <input type="text"  v-model="name"  class="form-control" id="username" placeholder="Enter name" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email address</label>
              <input type="email" v-model="email"  class="form-control" id="email" placeholder="Enter email" required />
            </div>
            <div class="mb-3">
              <label for="password"  class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password" 
                placeholder="Enter password"
                required
              />
            </div>
            <div class="d-grid gap-2">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </form>
          <router-link to="login">already has account</router-link>
        </div>
      </div>
    </div>
</template>