<script setup lang="ts">
import HeroHome from "../components/HeroHome.vue";
import CarouselHome from "../components/CarouselHome.vue";

import SaleHome from "@/components/SaleHome.vue";
</script>

<template>
  <main>
    <div
      class="container mx-auto grid place-items-center gap-y-10 xl:grid-cols-2 my-5"
    >
      <SaleHome />
      <SaleHome />
      <SaleHome />
      <SaleHome />
    </div>
  </main>
</template>
