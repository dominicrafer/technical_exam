<template>
  <section class="p-2">
    <article class="flex flex-col gap-3 flex-nowrap xl:flex-row">
      <q-img :src="focusedImage" fit="contain" />
      <div
        class="flex flex-row flex-nowrap bg-opacity-50 h-full gap-4 overflow-auto min-w-[150px] xl:flex-col xl:max-h-[800px]"
      >
        <q-img
          class="border border-primary min-w-[130px] border-opacity-30"
          :src="image"
          fit="contain"
          @click="focusedImage = image"
          v-for="(image, index) in selectedProduct?.header.product_images"
          :key="index"
        />
      </div>
      <div class="flex flex-col xl:max-w-[400px] max-w-none">
        <p
          class="text-2xl py-5 font-bold border-b border-b-[#242424] border-opacity-50"
        >
          {{ selectedProduct?.header.title }}
        </p>
        <span>{{ selectedProduct?.header.description }}</span>
        <span class="mt-4">${{ selectedProduct?.price }}</span>
        <div class="mt-4">
          <Button color="warning" label="ADD TO CART" class="w-full" />
        </div>
        <q-tabs class="mt-4" v-model="tab" active-color="primary">
          <q-tab label="FEATURES" name="features" />
          <q-tab label="SPECS" name="specs" />
        </q-tabs>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="features" class="flex flex-col gap-3">
            <div
              v-for="(
                featureDetails, featureDetailsIndex
              ) in selectedProduct?.features"
              :key="featureDetailsIndex"
            >
              <span class="text-lg font-semibold">{{
                featureDetails.subtitle
              }}</span>
              <ol>
                <li
                  v-for="(feature, featureIndex) in featureDetails.list"
                  :key="featureIndex"
                >
                  {{ feature }}
                </li>
              </ol>
            </div>
          </q-tab-panel>

          <q-tab-panel name="specs">
            <div
              v-for="(
                featureDetails, featureDetailsIndex
              ) in selectedProduct?.features"
              :key="featureDetailsIndex"
            >
              <span class="text-lg font-semibold">{{
                featureDetails.subtitle
              }}</span>
              <ol>
                <li
                  v-for="(feature, featureIndex) in featureDetails.list"
                  :key="featureIndex"
                >
                  {{ feature }}
                </li>
              </ol>
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { useProductsStore } from "@/store/products";
const { $_ } = useNuxtApp();
const route: any = useRoute();
const productStore: any = useProductsStore();
const selectedProduct = $_.find(productStore.list, { id: parseInt(route.params.id) });
productStore.select(selectedProduct);
const focusedImage = ref(productStore.selectedProduct?.header.featured_image);
const tab = ref("features");
</script>
<style lang="postcss" scoped></style>
