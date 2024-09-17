<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="greetings">
    <h1 class="red">{{ msg }}</h1>
  </div>
</template>

<style scoped>
.red {
  color: red;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
