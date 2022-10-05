<script setup lang="ts">
import { computed, onBeforeMount, onMounted, ref, type Ref } from "vue";
import { useRoute } from "vue-router";
import shoes from "@/data/shoes.json";
import type { ShoeType, SizeType } from "@/types";
import ShoesGridShoe from "../components/ShoesGridShoe.vue";
import SizeChart from "@/components/ShoeViewSizeChart.vue";
import allSizes from "@/data/allSizes.json";
import { useFetch } from "@/composables/useFetch";
import { formatNumStr2DecimalPlaces } from "@/utils";
import { useShoppingBagStore } from "@/stores/shoppingBag";
import { storeToRefs } from "pinia";
const route = useRoute();

const shoeId = computed(() => route.params.shoeId);

const shoe = ref<ShoeType | null>(null);
const selectedSize = ref<SizeType | null>(null);

const shoppingBagStore = useShoppingBagStore();
const {} = storeToRefs(shoppingBagStore);

onBeforeMount(async () => {
  const { data } = await useFetch<ShoeType>(`/shoes/${shoeId.value}`).json();
  shoe.value = data.value;
});

const formattedShoePrice = computed(() =>
  formatNumStr2DecimalPlaces("" + shoe.value?.price)
);

function addItemToBag() {
  if (!selectedSize.value) return alert("You must select a size");

  shoppingBagStore.addItemToBag({
    shoe: shoe.value!,
    size: selectedSize.value,
    quantity: 1,
  });
}

function setSelectedSize(size: SizeType) {
  selectedSize.value = size;
}
</script>
<template>
  <div class="container mx-auto px-5 my-10">
    <div v-if="shoe" class="">
      <div class="details">
        <p class="text-xl">{{ shoe.name }}</p>
        <p class="my-4 text-gray-500">
          {{ shoe.category }}
        </p>
        <p class="text-xl">£{{ formattedShoePrice }}</p>
      </div>

      <img :src="shoe.image" alt="shoe" class="w-100 mt-2" />

      <SizeChart :shoeDetails="shoe.details" @sizeSelected="setSelectedSize" />

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
