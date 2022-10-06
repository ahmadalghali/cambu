<script setup lang="ts">
import { CategoryEnum } from "@/types";
import { ref, watch } from "vue";

interface Props {
  categories: CategoryEnum[];
}

const props = defineProps<Props>();

const emit = defineEmits(["categoryChanged"]);

const selectedCategory = ref(CategoryEnum.ALL);

const isSelected = (category: CategoryEnum) => {
  return category == selectedCategory.value;
};

watch(selectedCategory, () => {
  emit("categoryChanged", selectedCategory.value);
});
</script>
<template>
  <ul
    class="categories mt-10 flex space-x-7 md:justify-center overflow-x-auto mx-0 py-4 scrollbar-hide cursor-pointer"
  >
    <li
      v-for="category in categories"
      :key="category"
      class="hover:scale-105 transition-all hover:-translate-y-[1px] ease-in duration-75"
      :class="{
        'border-b-2 border-black font-semibold shadow-xl': isSelected(category),
      }"
      @click="selectedCategory = category"
    >
      {{ category }}
    </li>
  </ul>
</template>
<style scoped></style>

<!-- :class="{ 'font--semibold': isSelected(category.id) }" -->
