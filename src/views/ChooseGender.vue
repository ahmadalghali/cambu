<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="container px-6 space-y-10 md:w-1/2 mx-auto py-10 my-10">
    <div
      class="gender text-center cursor-pointer py-10 px-20 rounded-md shadow-3xl hover:scale-105 hover:-translate-y-1 transition-all ease-out duration-300 border border:gray-500 hover:border-black text-3xl font-light hover:font-medium"
      @click="router.push('/shoes/mens')"
    >
      <p class="">Mens</p>
    </div>
    <div
      class="gender text-center cursor-pointer py-10 px-20 rounded-md shadow-3xl hover:scale-105 hover:-translate-y-1 transition-all ease-out duration-300 border border:gray-500 hover:border-black text-3xl font-light hover:font-medium"
      @click="router.push('/shoes/womens')"
    >
      <p class="">Womens</p>
    </div>
    <div
      class="gender text-center cursor-pointer py-10 px-20 rounded-md shadow-3xl hover:scale-105 hover:-translate-y-1 transition-all ease-out duration-300 border border:gray-500 hover:border-black text-3xl font-light hover:font-medium"
      @click="router.push('/shoes/kids')"
    >
      <p class="">Kids</p>
    </div>
  </div>
</template>
<style scoped></style>
