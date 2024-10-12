<script>
import { ref, onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import homeBg from '../assets/img/home-bg.jpg';
import Navigation from '../components/Navigation.vue';
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  components: {
    Navigation,
    QuillEditor
  },

  setup() {
    const route = useRoute();
    const post = reactive({});
    const loading = ref(true);
    const comment = ref('add your comment')
    const currentUser = reactive({});
    const isLogin = ref(false);
    onMounted(async () => {
      try {
        const id = route.params.id;
        console.log('will get id', route.params.id);
        const response = await axios.get(`http://localhost:3000/blogs/${id}`);
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          Object.assign(post, response.data);
        }
        // check auth
        const user = localStorage.getItem('user')
        if(user) {
          Object.assign(currentUser, JSON.parse(user));
          isLogin.value = true;
        }
      } catch (e) {
        console.error(e);
      } finally {
        loading.value = false;
      }
    });

    return {
      post,
      currentUser,
      loading,
      isLogin,
      homeBg,
      editorOptions: {
        theme: 'snow', // Quill themes: 'snow', 'bubble'
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline'],
            ['link', 'image'],
          ],
        },
      },
      comment
    };
  },
};
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
            <h1>{{ post.title }}</h1>
            <span class="subheading">{{ post.title }}</span>
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
          <!-- Post Content -->
          <p v-if="loading">Loading...</p>
          <div v-else>
            {{ post.content }}
            <!-- Correctly using QuillEditor component -->
             <h2>current User: {{ currentUser?.name }}</h2>
             <div v-if="isLogin" >
              <QuillEditor v-model="comment" :options="editorOptions" placeholder="add your comment" />
             </div>
          
          </div>
          <!-- Comment form -->
          <!-- <form @submit.prevent="onSubmit">
            <div class="mb-3 mt-5">
              <textarea
                v-model="email"
                type="email"
                class="form-control"
                id="username"
                placeholder="Enter your comment"
              ></textarea>
              <button type="submit" class="btn btn-primary mt-3">
                Comment
              </button>
            </div>
          </form> -->
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
