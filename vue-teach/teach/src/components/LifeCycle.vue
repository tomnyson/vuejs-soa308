<script>
import { onMounted, reactive, ref } from 'vue'
import axios from 'axios'

export default {
    setup() {
        const loading = ref(true)
        const posts = reactive([])
        onMounted(() => {
            // alert('The component is mounted!')
            const url = "http://localhost:3000/posts";
            axios
                .get(url)
                .then(function (response) {
                    // handle success
                    loading.value = false;
                    // let postLists = [..posts].concat(response.data)
                    // console.log(postLists)
                    posts.push(...response.data)
                    // posts = tempPosts
                    // console.log(response.data)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error)
                })
                .finally(function () {
                    // always executed
                })
        })

        return { loading, posts }
    }
}
</script>

<template>
    <h1>Life cycle hook</h1>
    <div class="row">
        <div class="col-md-3" v-for="item in posts" :key="item.id">
            <div class="card" style="width:20rem;margin:20px 0 24px 0">
                <img class="card-img-top" src="#" alt="image" style="width:100%" />
                <div class="card-body">
                    <h4 class="card-title">{{ item.title }}</h4>
                    <p class="card-text">
                        {{ item.title }}, {{ item.view }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
