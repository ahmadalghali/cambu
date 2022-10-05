<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="container mx-auto px-10 py-10 my-10">
    <div class="space-y-10">
      <div
        class="gender max-w-xl text-center cursor-pointer py-10 px-20 rounded-xl shadow-3xl hover:underline hover:scale-105 hover:-translate-y-1 transition-all ease-in-out duration-200 border-2 bord-black"
        @click="router.push('/shoes/mens')"
      >
        <p class="text-3xl font-medium">Mens</p>
      </div>
      <div
        class="gender max-w-xl text-center cursor-pointer py-10 px-20 rounded-xl shadow-3xl hover:underline hover:scale-105 hover:-translate-y-1 transition-all ease-in-out duration-200 border-2 bord-black"
        @click="router.push('/shoes/womens')"
      >
        <p class="text-3xl font-medium">Womens</p>
      </div>
      <div
        class="gender max-w-xl text-center cursor-pointer py-10 px-20 rounded-xl shadow-3xl hover:underline hover:scale-105 hover:-translate-y-1 transition-all ease-in-out duration-200 border-2 bord-black"
        @click="router.push('/shoes/kids')"
      >
        <p class="text-3xl font-medium">Kids</p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
