<script setup lang="ts">
import { ref, reactive } from 'vue';
// import Router from './router';
import MainMenu from '@components/MainMenu.vue';
import MainHeader from '@components/MainHeader.vue';
import MainFooter from '@components/MainFooter.vue';

// function move() {
//   Router.push('/user/admin');
// }
</script>

<template>
  <MainMenu msg="SideBar"/>
  <div class="main-wrapper">
    <MainHeader />
   
    <main class="main">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'Login' }" class="btn btn-info">Login</router-link> |
      <!-- <button @click="$router.back" class="btn btn-success">User</button> -->
      <router-view />
    </main>

    <MainFooter />
  </div>
</template>

<style lang="scss">
  @import "@assets/scss/common.scss";
  @import "bootstrap/scss/bootstrap.scss";
  @import "sweetalert2/src/sweetalert2.scss";
</style>
