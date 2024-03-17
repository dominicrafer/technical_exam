import { defineStore } from "pinia";
import product1 from "@/data/products/everyday-backpack.json";
import product2 from "@/data/products/everyday-case-for-iphone-15-pro.json";
import product3 from "@/data/products/slide.json";
import product4 from "@/data/products/tech-pouch.json";
import product5 from "@/data/products/travel-tripod.json";
export const useProductsStore = defineStore({
  id: "products",
  state: () => {
    return {
      list: [product1, product2, product3, product4, product5],
    };
  },
  getters: {
    selectedProductDetails: (state) => {
      const route: any = useRoute();
      const { $_ } = useNuxtApp();
      return $_.find(state.list, { id: parseInt(route.params.id) });
    },
  },
});
