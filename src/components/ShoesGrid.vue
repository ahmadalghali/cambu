<script setup lang="ts">
import Shoe from "@/components/ShoesGridShoe.vue";
import type { ShoeType } from "@/types";
import { useRoute, useRouter } from "vue-router";
interface Props {
  shoes: ShoeType[];
}

defineProps<Props>();

const router = useRouter();
const route = useRoute();
</script>
<template>
  <div
    class="grid gap-4 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 mt-10 justify-items-center"
  >
    <Shoe
      v-for="shoe in shoes"
      :key="shoe.id"
      :shoe="shoe"
      @click="router.push(`/shoes/${route.params.type}/${shoe.id}`)"
    />
  </div>
</template>
<style scoped></style>
