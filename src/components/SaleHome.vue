<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="card w-11/12 bg-base-100 shadow-xl image-full">
    <figure>
      <img
        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2912&q=80"
        alt="Shoes"
      />
    </figure>
    <div class="card-body">
      <h2 class="card-title">50% Off</h2>
      <p>End of seaon sale, don't miss out.</p>
      <div class="card-actions justify-end">
        <button
          class="btn bg-white rounded-3xl text-black hover:text-white"
          @click="router.push('/shoes')"
        >
          Shop
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
