<template>
  <div class="p-2">
    <p class="text-primary text-2xl py-10 font-bold">
      CART {{ cartStore.products.length }} ITEMS
    </p>
    <VForm>
      <div class="flex flex-col gap-2">
        <div
          v-for="(productDetails, index) in cartStore.products"
          :key="`${index}-${productDetails.header.title}`"
          class="p-4 flex items-start flex-nowrap border border-primary"
        >
          <div class="w-[100px] flex-grow-0">
            <q-img :src="productDetails.header.featured_image" fit="contain" />
          </div>
          <div class="flex flex-col w-full">
            <div class="flex flex-nowrap">
              <NuxtLink
                target="_blank"
                :to="{ name: 'product-id', params: { id: productDetails.id } }"
                class="text-primary font-bold w-full underline"
              >
                {{ productDetails.header.title }} x
                {{ productDetails.quantity }}
              </NuxtLink>
              <span
                class="text-red underline cursor-pointer"
                @click="cartStore.remove(index)"
                >REMOVE</span
              >
            </div>
            <div
              class="flex justify-between items-end w-full flex-nowrap gap-2"
            >
              <div class="flex items-center w-full">
                <InputField
                  :name="`product[${index}].quantity`"
                  label="Quantity"
                  v-model="cartStore.products[index].quantity"
                  :rules="{
                    min_value: 1,
                    required: true,
                  }"
                  type="number"
                  class="w-full"
                />
              </div>
              <p>
                ${{
                  cartStore.products[index].quantity *
                  cartStore.products[index].price
                }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </VForm>
    <div class="bg-gray-100 p-3 mt-3 flex justify-between">
      <span>SUBTOTAL</span>
      <span
        >${{
          $_.sumBy(
            cartStore.products,
            (productDetails: any) =>
              productDetails.quantity * productDetails.price
          )
        }}</span
      >
    </div>
    <Button color="positive" label="CHECKOUT" class="mt-2 w-full"></Button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from "@/store/cart";

const cartStore = useCartStore();
</script>
<style lang="postcss" scoped></style>
