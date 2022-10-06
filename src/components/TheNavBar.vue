<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";
import TheNavBarBasketIcon from "./TheNavBarBasketIcon.vue";
import TheNavBarSearchIcon from "./TheNavBarSearchIcon.vue";
import TheNavBarLinks from "./TheNavBarLinks.vue";
const router = useRouter();
</script>
<template>
  <div class="navbar bg-base-100 z-50 fixed top-10 drop-shadow">
    <div class="navbar-start">
      <!-- BURGER MENU -->
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-5 h-5 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <TheNavBarLinks />
        </ul>
      </div>
      <img
        src="../assets/shoe-logo.png"
        alt="logo"
        class="h-12 w-12 hidden md:flex ml-4 cursor-pointer"
        @click="router.push('/')"
      />
    </div>
    <div class="navbar-center hidden md:flex">
      <ul class="menu menu-horizontal p-0">
        <TheNavBarLinks />
      </ul>
    </div>
    <div class="navbar-center-mobile md:hidden">
      <img
        src="../assets/shoe-logo.png"
        alt="logo"
        class="h-10 w-10 mx-auto cursor-pointer"
        @click="router.push('/')"
      />
    </div>

    <div class="navbar-end">
      <TheNavBarSearchIcon />
      <TheNavBarBasketIcon @click="router.push('/bag')" />
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
