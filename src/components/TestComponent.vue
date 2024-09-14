<template>
  <div>
    <h1>{{ title }}</h1>
    <p>Button clicked {{ count }} times.</p>
    <button @click="incrementCount">Click me</button>

    <button @click="decrementCount">Click me</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Test',     // Tiêu đề của component
      count: 0           // Trạng thái đếm số lần bấm nút
    };
  },
  methods: {
    incrementCount() {
      this.count++;      // Tăng giá trị đếm khi bấm nút
    },
    decrementCount() {
      if(this.count <= 0) {
        this.count = 0;
      }else {
        this.count--;
      }
           // Tăng giá trị đếm khi bấm nút
    }
  }
}
</script>
