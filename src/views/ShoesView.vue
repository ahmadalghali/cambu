<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Categories from "@/components/ShoesCategories.vue";
import FilterIcon from "@/components/FilterIcon.vue";
import ShoesGrid from "@/components/ShoesGrid.vue";
import { CategoryEnum, type ShoeType } from "@/types";
import { categories } from "@/data/categories";
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

onBeforeMount(() => {
  fetchShoes(CategoryEnum.ALL);
});

async function fetchShoes(category: CategoryEnum) {
  const url = category ? `/shoes?category=${category}` : "/shoes";
  const { data } = await useFetch<ShoeType[]>(url).json();
  shoes.value = data.value;
}
</script>
<template>
  <div class="pb-20">
    <div class="mx-5">
      <h1 class="text-xl">{{ title }}</h1>
      <Categories :categories="categories" @categoryChanged="fetchShoes" />
    </div>
    <hr />
    <div class="mx-5 flex justify-between items-center mt-5">
      <p class="text-sm text-gray-600 text-opacity-70">
        {{ shoes?.length }} Results
      </p>
      <FilterIcon />
    </div>
    <div v-if="shoes?.length" class="">
      <ShoesGrid :shoes="shoes" />
    </div>
    <div v-else class="grid place-items-center py-52">
      <p class="text-2xl opacity-50">There are no shoes for this category.</p>
    </div>
  </div>
</template>
<style scoped></style>
