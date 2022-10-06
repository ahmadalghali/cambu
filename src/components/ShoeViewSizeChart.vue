<script setup lang="ts">
import {
  SizeNameEnum,
  type DefaultShoeSizeType,
  type ShoeSizeStockType,
  type ShoeType,
  type SizeType,
} from "@/types";
import { computed, ref } from "vue";

interface Props {
  shoeDetails: ShoeSizeStockType[];
}

const props = defineProps<Props>();

interface Emits {
  (e: "sizeSelected", size: SizeNameEnum): void;
}
const emit = defineEmits<Emits>();

let selectedSize = ref<SizeNameEnum | null>(null);

const allDefaultSizes: SizeNameEnum[] = [
  SizeNameEnum.UK_5,
  SizeNameEnum.UK_5_5,
  SizeNameEnum.UK_6,
  SizeNameEnum.UK_6_5,
  SizeNameEnum.UK_7,
  SizeNameEnum.UK_7_5,
  SizeNameEnum.UK_8,
  SizeNameEnum.UK_8_5,
  SizeNameEnum.UK_9,
  SizeNameEnum.UK_9_5,
  SizeNameEnum.UK_10,
  SizeNameEnum.UK_10_5,
  SizeNameEnum.UK_11,
];

const isSelectedSize = (size: SizeNameEnum) => {
  return selectedSize.value == size;
};

const setSelectedSize = (e: MouseEvent, size: SizeNameEnum) => {
  emit("sizeSelected", size);
  // @ts-ignore
  const isDisabled = e.target.classList.contains("disabled");
  if (isDisabled) return;
  selectedSize.value = size;
};

const availableShoeSizes = computed(() => {
  return props.shoeDetails.map((detail) => detail.size.name);
});

const isInStock = (defaultSize: SizeNameEnum) => {
  return availableShoeSizes.value.includes(defaultSize);
};
</script>
<template>
  <ul class="grid grid-cols-3 gap-2 my-5">
    <li
      v-for="defaultSize in allDefaultSizes"
      :key="defaultSize"
      class="border border-gray-300 py-3 px-5 rounded-md text-center font-light cursor-pointer hover:border-black transition-all"
      :class="{
        'disabled opacity-50 bg-gray-300 text-gray-700 border-none hover:border-none':
          !isInStock(defaultSize),
        'bg-black text-white shadow-2xl': isSelectedSize(defaultSize),
      }"
      @click="(e) => setSelectedSize(e, defaultSize)"
    >
      {{ defaultSize }}
    </li>
  </ul>
</template>
<style scoped></style>
