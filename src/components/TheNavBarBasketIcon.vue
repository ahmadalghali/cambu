<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";

const itemCount = 3;
const router = useRouter();

const subTotal = computed(() => {
  return "0.00";
});
</script>
<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn btn-ghost btn-circle">
      <div class="indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span v-if="itemCount > 0" class="badge badge-sm indicator-item">{{
          itemCount
        }}</span>
      </div>
    </label>
    <div
      tabindex="0"
      class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
    >
      <div class="card-body">
        <span v-if="itemCount" class="font-bold text-lg"
          >{{ itemCount }} Items</span
        >
        <span v-else class="font-bold text-lg">Cart is empty</span>

        <span class="text-info">Subtotal: £{{ subTotal }}</span>
        <div class="card-actions">
          <button
            class="btn btn-primary btn-block disabled:opacity-95"
            :disabled="itemCount == 0"
            @click="router.push('/cart')"
          >
            View cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
