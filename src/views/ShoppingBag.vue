<script setup lang="ts">
import { useShoppingBagStore } from "@/stores/shoppingBag";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import BagItem from "@/components/BagItem.vue";
import { ref } from "vue";

const router = useRouter();
const shoppingBagStore = useShoppingBagStore();
const { itemCount, total, bagItems } = storeToRefs(shoppingBagStore);
const deliveryCost = ref(8.99);
const subtotal = ref(0);
// const total = ref(0)
</script>
<template>
  <div class="container mx-auto px-5">
    <div v-if="itemCount" class="mb-20">
      <div class="flex space-x-3 items-center">
        <p class="text-2xl font-semibold">Your Bag</p>
        <p class="text-lg">
          ( {{ itemCount }} {{ itemCount > 1 ? "items" : "item" }} )
        </p>
      </div>

      <p class="mt-4 font-medium text-lg">£{{ total }}</p>
      <hr class="my-5 xl:hidden" />

      <div class="hidden xl:grid grid-cols-2 gap-x-5 mt-5">
        <div class="space-y-10">
          <div v-for="(item, index) in bagItems" :key="index" class="">
            <BagItem :item="item" />
            <hr class="mt-5" />
          </div>
        </div>

        <div class="">
          <div class="">
            <p class="text-lg">Have a voucher code?</p>

            <div class="flex space-x-3 mt-1">
              <input
                type="text"
                class="border border-black rounded-md w-full px-3 text-lg uppercase font-medium focus:outline-black"
              />
              <button class="btn btn-primary rounded-full px-6">Apply</button>
            </div>
          </div>

          <div class="mt-10 text-lg space-y-3">
            <div class="flex justify-between">
              <p>Subtotal</p>
              <p>£{{ subtotal }}</p>
            </div>
            <div class="flex justify-between">
              <p>Delivery</p>
              <p>£{{ deliveryCost }}</p>
            </div>
            <div class="flex justify-between">
              <p>Total</p>
              <p>£{{ total }}</p>
            </div>
          </div>

          <button class="btn btn-primary rounded-full w-full mt-10 h-14">
            Checkout
          </button>
        </div>
      </div>

      <div class="mobile xl:hidden">
        <div class="items my-10 space-y-10">
          <div v-for="(item, index) in bagItems" :key="index" class="">
            <BagItem :item="item" />
            <hr class="mt-5" />
          </div>
        </div>

        <div class="">
          <p class="text-lg">Have a voucher code?</p>

          <div class="flex space-x-3 mt-1">
            <input
              type="text"
              class="border border-black rounded-md w-full px-3 text-lg uppercase font-medium focus:outline-black"
            />
            <button class="btn btn-primary rounded-full px-6">Apply</button>
          </div>
        </div>

        <div class="mt-10 text-lg space-y-3">
          <div class="flex justify-between">
            <p>Subtotal</p>
            <p>£{{ subtotal }}</p>
          </div>
          <div class="flex justify-between">
            <p>Delivery</p>
            <p>£{{ deliveryCost }}</p>
          </div>
          <div class="flex justify-between">
            <p>Total</p>
            <p>£{{ total }}</p>
          </div>
        </div>

        <button class="btn btn-primary rounded-full w-full mt-10 h-14">
          Checkout
        </button>
      </div>
    </div>
    <div v-else class="grid place-items-center gap-y-10 my-40">
      <svg
        class="w-40 h-40 opacity-50"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <p class="text-2xl">Your bag is empty</p>
      <button
        class="btn btn-primary w-1/2 rounded-full"
        @click="router.push('/shoes')"
      >
        Shop now
      </button>
    </div>
  </div>
</template>
<style scoped></style>
