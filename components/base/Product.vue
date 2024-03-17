<template>
  <article class="flex flex-col flex-nowrap p-2">
    <q-card class="flex flex-nowrap w-full">
      <q-img
        :src="productDetails.header.featured_image"
        class="w-full"
        fit="contain"
      >
      </q-img>
      <q-card-section
        class="w-full md:max-w-[300px] flex flex-col md:justify-center"
      >
        <p
          class="text-lg md:text-xl font-bold md:text-left border-b border-primary border-opacity-50"
        >
          {{ productDetails.header.title }}
        </p>
        <p
          class="md:text-lg mt-6 line-clamp-4 lg:line-clamp-none"
          :class="seeMore ? 'line-clamp-none' : 'line-clamp-4'"
        >
          {{ productDetails.header.description }}
        </p>
        <span
          class="cursor-pointer underline lg:hidden"
          v-if="!seeMore"
          @click="seeMore = !seeMore"
          >See more</span
        >
        <span class="mt-4">${{ productDetails.price }}</span>
        <div class="mt-10 flex flex-col gap-2">
          <Button
            label="ADD TO CART"
            color="warning"
            @click="cartStore.add(productDetails)"
            class="w-full"
          />
          <Button
            label="VIEW DETAILS"
            class="w-full"
            :to="{
              name: 'product-id',
              params: {
                id: productDetails.id,
              },
            }"
          />
        </div>
      </q-card-section>
    </q-card>
  </article>
</template>
<script setup lang="ts">
import { useCartStore } from "@/store/cart";
defineProps({
  productDetails: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const cartStore = useCartStore();
const seeMore = ref(false);
</script>
