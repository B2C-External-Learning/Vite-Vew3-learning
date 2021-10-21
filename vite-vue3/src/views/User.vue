<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ userName: string }>()
</script>

<template>
  <h1>The user is {{ userName }}</h1>
</template>

<style scoped lang="scss">

</style>
