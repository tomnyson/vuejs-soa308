<script setup>
defineProps({
  mssv: {
    type: String,
    required: true
  },
  ten: {
    type: String
  },
  lop: {
    type: String
  }
})
</script>
<script>
export default {
  data() {
    return {
      title: 'kiến thức sức khoẻ cộng đồng',
      posts: [
        {
          "createdAt": "2024-09-08T15:32:07.242Z",
          "title": "Global Tactics Technician",
          "picture": "https://loremflickr.com/640/480/sports",
          "description": "Molestias atque quia ut quam. In tempore provident fugit minus illum perspiciatis. Voluptatibus rerum reprehenderit. Culpa mollitia non sed amet excepturi deserunt quos quibusdam.",
          "id": "29"
        },
        {
          "createdAt": "2024-09-08T19:14:56.633Z",
          "title": "Global Tactics Producer",
          "picture": "https://loremflickr.com/640/480/food",
          "description": "Tempore nesciunt assumenda iste sed. Odio occaecati assumenda quod mollitia molestias itaque ut asperiores beatae. Aliquid nobis consequatur impedit nulla.",
          "id": "36"
        },
        {
          "createdAt": "2024-09-08T12:34:17.781Z",
          "title": "Lead Tactics Producer",
          "picture": "https://loremflickr.com/640/480/fashion",
          "description": "Praesentium neque accusantium iusto in libero soluta. Minima dicta et. Ullam quae temporibus. Possimus ab eum repellendus. Tenetur magni possimus alias. Nesciunt illo fugit officiis non autem.",
          "id": "37"
        },
      ],
      count: 0,
      isShow: true,
      type: 'B',
      search: 'tim kiem'
    }
  },
  methods: {
    updateTitle() {
      alert(this.title)
      this.title = 'Update title'
    },
    tangClick() {
      this.count++
    },
    giamClick() {
      this.count--
    }
  }
}
</script>

<template>
  <div class="row gutter-5 mt-5">
    <h2>{{ title }}</h2>
    <h2>{{ count }}</h2>
    <button v-on:click="updateTitle" class="btn btn-info">change text</button>
    <button @click="tangClick" class="btn btn-info mt-3">+</button>
    <button @click="giamClick" class="btn btn-info mt-3">-</button>
    <h3 class="mt-5">v-model {{ search }}</h3>
    <input type="text mb-3" class="form-control" v-model="search" />
    <h3 v-show="isShow">hien thi text here</h3>
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>
    <div class="col-md-4" v-for="item in posts" :key="item.id">
      <div class="card">
        <img class="card-img-top" :src="item.picture" alt="image" />
        <div class="card-body">
          <h4 class="card-title">{{ item.title }}</h4>
          <p class="card-text">{{ item.description }}</p>
          <a href="javascript:void(0)" class="btn btn-primary">See Profile</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
