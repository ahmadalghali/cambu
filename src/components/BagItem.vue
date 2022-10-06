<script setup lang="ts">
import type { BagItemType } from "@/types";
import { formatNumStr2DecimalPlaces } from "@/utils";
import { computed, ref } from "vue";
import CrossIcon from "@/components/CrossIcon.vue";
import { useShoppingBagStore } from "@/stores/shoppingBag";
interface Props {
  item: BagItemType;
}

const props = defineProps<Props>();

const shoppingBagStore = useShoppingBagStore();

const quantity = ref(1);

const itemSubTotal = computed<string>(() => {
  const subtotal = parseFloat(props.item.shoe.price) * quantity.value;
  return formatNumStr2DecimalPlaces(subtotal);
});

function removeItem() {
  shoppingBagStore.removeItemFromBag(props.item.shoe.id, props.item.size.name);
}
</script>
<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3">
      <img
        :src="item.shoe.image"
        alt="shoe"
        class="aspect-square object-cover"
      />
      <div class="col-span-2 px-3 flex flex-col justify-between">
        <div class="flex justify-between">
          <div class="">
            <p class="text-lg font-medium">{{ item.shoe.name }}</p>
          </div>
          <CrossIcon @click="removeItem" />
        </div>
        <p class="">Size: {{ item.size.name }}</p>

        <div class="flex justify-between">
          <p>£{{ itemSubTotal }}</p>
          <div>
            <label for="qty">Qty:</label>
            <select
              name="qty"
              id="qty"
              v-model="quantity"
              class="focus:outline-none mx-1 px-2 cursor-pointer"
            >
              <option v-for="num in 10" :value="num">{{ num }}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
