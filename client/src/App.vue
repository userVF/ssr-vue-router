<template>
  
  <button 
    type="button" 
    @click="counter++">count: {{ counter }}
  </button>

  <RouterView />

</template>

<script setup>

  import { ref } from 'vue'
  let counter = ref(0)  

</script>