<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import shoes from "@/data/shoes.json";
import type { ShoeType } from "@/types";
import ShoesGridShoe from "../components/ShoesGridShoe.vue";
import SizeChart from "@/components/ShoeViewSizeChart.vue";
import allSizes from "@/data/allSizes.json";
import { useFetch } from "@/composables/useFetch";
const route = useRoute();

const shoeId = computed(() => route.params.shoeId);

const shoe = ref<ShoeType | null>(null);

onBeforeMount(async () => {
  const { data } = await useFetch<ShoeType>(`/shoes/${shoeId.value}`).json();
  shoe.value = data.value;

  console.log("shoe.value :>> ", shoe.value);
});
</script>
<template>
  <div class="container mx-auto px-5 my-10">
    <div v-if="shoe" class="">
      <div class="details">
        <p class="text-xl">{{ shoe.name }}</p>
        <p class="my-4 text-gray-500">
          {{ shoe.category }}
        </p>
        <p class="text-xl">£{{ shoe.price }}</p>
      </div>

      <img :src="shoe.image" alt="shoe" class="w-100 mt-2" />

      <SizeChart :shoeDetails="shoe.details" />
    </div>

    <div v-else>
      <p>{{ `Shoe ${shoeId} Not found.` }}</p>
    </div>
  </div>
</template>
<style scoped></style>
