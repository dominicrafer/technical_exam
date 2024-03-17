<template>
  <q-header elevated reveal class="bg-white">
    <q-toolbar class="min-h-[65px] px-6 text-primary">
      <div class="flex justify-between items-center w-full">
        <div class="w-[55px] md:w-[105px]">
          <NuxtLink :to="{ path: '/' }">
            <q-img src="/images/logo.svg" :to="{ path: '/' }"></q-img>
          </NuxtLink>
        </div>
        <ul>
          <li>
            <NuxtLink :to="{ path: '/cart' }" class="relative">
              <Icon
                icon="mdi:cart-outline"
                color="#242424"
                width="24"
                height="24"
              />
              <span
                class="text-white bg-primary w-5 h-5 flex flex-col items-center rounded-full absolute bottom-[-10px] left-[15px]"
                >{{ cartStore.products.length }}</span
              >
            </NuxtLink>
          </li>
        </ul>
      </div>
    </q-toolbar>
  </q-header>
</template>
<script setup lang="ts">
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();
</script>
