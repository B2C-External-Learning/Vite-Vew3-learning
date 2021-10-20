<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div class="main-wrapper">
    <nav class="main-nav--bg">
      <div class="container main-nav">test</div>
    </nav>
    <main class="main">

    </main>
    <footer class="footer">
      
    </footer>
  </div>
</template>

<style scoped>

</style>
