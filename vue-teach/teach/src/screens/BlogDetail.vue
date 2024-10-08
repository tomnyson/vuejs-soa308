<script>
import { ref, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import homeBg from '../assets/img/home-bg.jpg'
export default {
  setup() {
    const route = useRoute()
    const post = reactive({})
    const loading = ref(true)

    onMounted(async () => {
      try {
        const id = route.params.id
        console.log('will get id', route.params.id)
        const response = await axios.get(`http://localhost:3000/blogs/${id}`)
        console.log(response)
        if(response.status == 200) {
            console.log(response.data)
            // post = response.data
            Object.assign(post,response.data)
        }
      } catch (e) {
        console.error(e)
      } finally {
        loading.value = false
      }
    })

    return {
        post, loading
    }
  }
}
</script>
<template>
  <!-- Navigation-->
  <Navigation />
  <!-- Page Header-->
  <header class="masthead" :style="{ backgroundImage: `url(${homeBg})` }">
    <div class="container position-relative px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <div class="site-heading">
            <h1> {{ post.title }}</h1>
            <span class="subheading">   {{ post.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <article class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <!-- <p v-if="loading">load</p> -->
          {{ post.content }}
        </div>
      </div>
    </div>
  </article>
  <!-- Footer-->
  <footer class="border-top">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="#!">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#!">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#!">
                <span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
          <div class="small text-center text-muted fst-italic">
            Copyright &copy; Your Website 2023
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
