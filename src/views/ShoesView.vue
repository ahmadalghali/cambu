<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Categories from "@/components/ShoesCategories.vue";
import FilterIcon from "@/components/FilterIcon.vue";
import ShoesGrid from "@/components/ShoesGrid.vue";
import type { ShoeType, CategoryType } from "@/types";
import categories from "@/data/categories.json";
// import { useFetch } from "@vueuse/core";
// import shoes from "@/data/shoes.json";
import { useFetch } from "@/composables/useFetch";
const route = useRoute();

const title = computed(() => {
  let type;
  switch (route.params.type) {
    case "mens":
      type = "Men's";
      break;
    case "womens":
      type = "Women's";
      break;
    case "kids":
      type = "Kids";
      break;
  }

  return `${type} Shoes & Trainers`;
});

let shoes = ref<ShoeType[] | null>(null);

onBeforeMount(async () => {
  const { data } = await useFetch<ShoeType[]>("/shoes").json();
  shoes.value = data.value;
});
</script>
<template>
  <div class="">
    <div class="mx-5">
      <h1 class="text-xl">{{ title }}</h1>
      <Categories :categories="categories" />
    </div>
    <hr />
    <div v-if="shoes?.length" class="">
      <div class="mx-5 flex justify-between items-center mt-5">
        <p class="text-sm text-gray-600 text-opacity-70">
          {{ shoes.length }} Results
        </p>
        <FilterIcon />
      </div>

      <ShoesGrid :shoes="shoes" />
    </div>
    <div v-else class="container">
      <h3>No Shoes found</h3>
    </div>
  </div>
</template>
<style scoped></style>
