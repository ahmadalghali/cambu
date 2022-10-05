<script setup lang="ts">
import type { CategoryEnum } from "@/types";

interface Props {
  categories: CategoryEnum[];
}

const props = defineProps<Props>();

// const selected = Categories

const isSelected = (categoryId: number) => {
  return;
};
</script>
<template>
  <ul
    class="categories mt-10 flex space-x-7 md:justify-center overflow-x-auto mx-0 py-4 scrollbar-hide cursor-pointer"
  >
    <li
      v-for="category in categories"
      :key="category"
      class="category hover:opacity-40"
    >
      {{ category }}
    </li>
  </ul>
</template>
<style scoped></style>

<!-- :class="{ 'font--semibold': isSelected(category.id) }" -->
