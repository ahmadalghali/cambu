<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import TheAnnouncementTopBar from "./components/TheAnnouncementTopBar.vue";
import TheNavBar from "@/components/TheNavBar.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <TheAnnouncementTopBar />
  <TheNavBar />
  <RouterView class="mt-32" />
  <TheFooter />
</template>

<style scoped></style>
