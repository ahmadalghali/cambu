<script setup lang="ts">
import type { DefaultShoeSizeType, ShoeSizeStockType, SizeType } from "@/types";
import { computed, ref } from "vue";

interface Props {
  shoeDetails: ShoeSizeStockType[];
}

const props = defineProps<Props>();

interface Emits {
  (e: "sizeSelected", size: SizeType): void;
}
const emit = defineEmits<Emits>();

let selectedSize = ref<SizeType | null>(null);

const isSelectedSize = (size: SizeType) => {
  return selectedSize.value == size;
};

const setSelectedSize = (e: MouseEvent, size: SizeType) => {
  emit("sizeSelected", size);
  // @ts-ignore
  const isDisabled = e.target.classList.contains("disabled");
  if (isDisabled) return;
  selectedSize.value = size;
};

const outOfStock = (detail: ShoeSizeStockType) => {
  return detail.stock < 1;
};
</script>
<template>
  <ul class="grid grid-cols-3 gap-2 my-5">
    <li
      v-for="detail in shoeDetails"
      :key="detail.size.name"
      class="border border-gray-300 py-3 px-5 rounded-md text-center font-light cursor-pointer hover:border-black transition-all"
      :class="{
        'disabled opacity-50 bg-gray-300 text-gray-700 border-none hover:border-none':
          outOfStock(detail),
        'bg-black text-white shadow-2xl': isSelectedSize(detail.size),
      }"
      @click="(e) => setSelectedSize(e, detail.size)"
    >
      {{ detail.size.name }}
    </li>
  </ul>
</template>
<style scoped></style>
