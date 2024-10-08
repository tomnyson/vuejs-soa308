<script>
import Navigation from '../components/Navigation.vue'
import homeBg from '../assets/img/home-bg.jpg'
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
export default {
  setup() {
    const loading = ref(false)
    const posts = reactive([])

    onMounted(() => {
      const url = 'http://localhost:3000/blogs'
      axios
        .get(url)
        .then((response) => {
          console.log(response)

          if (response.status === 200) {
            loading.value = false
            posts.push(...response.data)
          }
        })
        .catch((error) => {
          console.error('Error fetching posts:', error)
          // Handle error appropriately
        })
    })

    return {
      loading,
      posts
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
            <h1>test</h1>
            <span class="subheading">A Blog Theme by Start Bootstrap</span>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Main Content-->
  <div class="container px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
      <div class="col-md-10 col-lg-8 col-xl-7">
        <h1 v-if="loading">Loading ...</h1>

        <!-- Post preview-->
        <div class="post-preview" v-for="item in posts" :key="item.id" >
            <router-link :to="`/blogs/${item.id}`"> <h2 class="post-title">{{item.title}}</h2></router-link>
            <h3 class="post-subtitle">{{ item.content.substring(0, 100) }}...</h3>
          <p class="post-meta">
            Posted by
            <a href="#!">Start Bootstrap</a>
            on September 24, 2023
          </p>
        </div>
        <!-- Pager-->
        <div class="d-flex justify-content-end mb-4">
          <a class="btn btn-primary text-uppercase" href="#!">Older Posts →</a>
        </div>
      </div>
    </div>
  </div>
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
