<template>
  <div>
    <section>
      <q-carousel
        v-model="slide"
        transition-prev="jump-right"
        transition-next="jump-left"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        class="text-white rounded-borders"
        infinite
        :autoplay="5000"
      >
        <q-carousel-slide
          v-for="(bannerDetails, index) in banners.data"
          :name="bannerDetails.title"
          :img-src="bannerDetails.image"
          class="flex flex-col justify-center w-full"
        >
          <section
            class="flex flex-col gap-4 bg-[#242424] bg-opacity-40 p-4 rounded-lg"
          >
            <p class="text-2xl md:text-[32px] font-bold tracking-widest">
              {{ bannerDetails.title }}
            </p>
            <span class="text-lg md:text-xl">{{
              bannerDetails.description
            }}</span>
          </section>
        </q-carousel-slide>
      </q-carousel>
    </section>

    <section class="px-2">
      <p CLASS="text-center pt-10 pb-5 text-2xl font-semibold">OUR PRODUCTS</p>

      <div class="space-y-4">
        <Product
          v-for="(productDetails, index) in productStore.list"
          :productDetails="productDetails"
          :key="index"
        />
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import banners from "@/data/banners.json";
import { useProductsStore } from "@/store/products";
const productStore = useProductsStore();
const slide = ref("CAMERA STRAPS");
</script>
<style lang="postcss" scoped></style>
