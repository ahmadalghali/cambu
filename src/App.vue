<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import AnnouncementTopBar from "./components/AnnouncementTopBar.vue";
import NavBar from "./components/nav/index.vue";
import Footer from "./components/footer/index.vue";
</script>

<template>
  <div class="relative">
    <AnnouncementTopBar />
    <NavBar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
