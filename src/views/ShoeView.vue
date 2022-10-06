<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, watch, type Ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import shoes from "@/data/shoes.json";
import type { ShoeType, SizeNameEnum, SizeType } from "@/types";
import ShoesGridShoe from "../components/ShoesGridShoe.vue";
import SizeChart from "@/components/ShoeViewSizeChart.vue";
import allSizes from "@/data/allSizes.json";
import { useFetch } from "@/composables/useFetch";
import { formatNumStr2DecimalPlaces } from "@/utils";
import { useShoppingBagStore } from "@/stores/shoppingBag";
import { storeToRefs } from "pinia";
const route = useRoute();
const router = useRouter();

const shoeId = computed(() => route.params.shoeId);

const shoe = ref<ShoeType | null>(null);
const selectedSize = ref<SizeType | null>(null);

const shoppingBagStore = useShoppingBagStore();
const {} = storeToRefs(shoppingBagStore);

const showSizeError = ref(false);

onBeforeMount(async () => {
  const { data } = await useFetch<ShoeType>(`/shoes/${shoeId.value}`).json();
  shoe.value = data.value;
});

const formattedShoePrice = computed(() =>
  formatNumStr2DecimalPlaces("" + shoe.value?.price)
);

function addItemToBag() {
  if (!selectedSize.value) return (showSizeError.value = true);

  shoppingBagStore.addItemToBag({
    shoe: shoe.value!,
    size: selectedSize.value,
    quantity: 1,
  });
}

function setSelectedSize(sizeName: SizeNameEnum) {
  const size = shoe.value?.details
    .map((detail) => detail.size)
    .filter((size) => size.name === sizeName)[0]!;

  selectedSize.value = size;
}

watch(selectedSize, () => {
  if (selectedSize.value) showSizeError.value = false;
});
</script>
<template>
  <div class="container mx-auto px-5 my-10">
    <div
      class="flex cursor-pointer font-bold hover:underline hover:scale-105 hover:-translate-y-1 transition-all"
      @click="router.push(`/shoes/${route.params.type}`)"
    >
      <svg
        class="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <p class="ml-2">All shoes</p>
    </div>
    <div v-if="shoe" class="mt-5">
      <div class="details">
        <p class="text-xl">{{ shoe.name }}</p>
        <p class="my-4 text-gray-500">
          {{ shoe.category }}
        </p>
        <p class="text-xl">£{{ formattedShoePrice }}</p>
      </div>

      <img :src="shoe.image" alt="shoe" class="w-100 mt-2" />

      <SizeChart
        :shoeDetails="shoe.details"
        @sizeSelected="setSelectedSize"
        :class="{ 'border border-red-500 rounded-2xl p-3': showSizeError }"
      />
      <p v-if="showSizeError" class="text-red-600">
        You must select a size to continue
      </p>
      <button
        class="btn btn-primary w-full rounded-full mt-5 h-14 shadow-md hover:scale-105 hover:-translate-y-1"
        @click="addItemToBag"
      >
        ADD TO BAG
      </button>

      <p class="text-gray-700 my-10">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
        doloremque magni nesciunt exercitationem ex error cum quasi maxime
        provident inventore.
      </p>
    </div>

    <div v-else>
      <p>{{ `Shoe ${shoeId} Not found.` }}</p>
    </div>
  </div>
</template>
<style scoped></style>
