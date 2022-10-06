<script setup lang="ts">
import AddToFavouritesIcon from "@/components/AddToFavouritesIcon.vue";
import type { ShoeType } from "@/types";
import { formatNumStr2DecimalPlaces } from "@/utils";
import { computed } from "vue";

interface Props {
  shoe: ShoeType;
}

const props = defineProps<Props>();

const formattedShoePrice = computed(() =>
  formatNumStr2DecimalPlaces(props.shoe.price)
);
</script>
<template>
  <div class="cursor-pointer">
    <div class="top relative">
      <img
        src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/8c56cae4-299c-476d-a2df-8a93a53c8eb3/quest-5-road-running-shoes-24Bw6b.png"
        alt="shoe"
        class="aspect-square object-cover"
      />
      <AddToFavouritesIcon class="absolute top-[5%] left-[85%]" />
      <!-- :solid="shoe.isFavourited"
        @click="shoe.isFavourited = !shoe.isFavourited" -->
    </div>
    <div class="bottom p-3 text-sm">
      <p class="text-base">{{ shoe.name }}</p>
      <p class="text-gray-500 font-light">{{ shoe.category }}</p>
      <p class="mt-1 font-medium">£{{ formattedShoePrice }}</p>
    </div>
  </div>
</template>
<style scoped></style>
