<script setup>
defineProps({
  mssv: {
    type: String,
    required: true
  },
  ten: {
    type: String,
  },
  lop: {
    type: String,
  }
})

</script>
<script>
export default {
  data() {
    return {
      mota: 'Thích code và chơi game',
      sinhvien: {
        mssv: 'pk001',
        ten: 'nguyen van a',
        lop: 'ptpm'
      }
    }
  }
}
</script>

<template>
  <div class="about">
    <h1 class="red">mssv: {{ mssv }}</h1>
    <h1 class="red">tên: {{ ten }}</h1>
    <h1 class="red">lớp: {{ lop }}</h1>
    <p>{{ mota }}</p>
  </div>
  <hr />
  <div class="sinhvien">
    <h1 class="red">mssv: {{ sinhvien.mssv }}</h1>
    <h1 class="red">tên: {{ sinhvien.ten }}</h1>
    <h1 class="red">lớp: {{ sinhvien.lop }}</h1>
    <p>{{ mota }}</p>
  </div>
</template>

<style scoped>
.red {
  color: red;
  font-weight: bold;
  text-transform: uppercase;
}

.about {
  border: 1px solid #333;
  padding: 20px;
}
</style>
