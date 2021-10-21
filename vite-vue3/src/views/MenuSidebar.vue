<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-head">
      <a href="/" class="logo-wrapper" title="Home"></a>
      <button class=""></button>
    </div>
    <div class="sidebar-body">

    </div>
    <div class="sidebar-footer">
      
    </div>
  </aside>
</template>

<style scoped>

</style>
