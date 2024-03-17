import { defineStore } from "pinia";
import product1 from "@/data/products/everyday-backpack.json";

export const useCartStore = defineStore({
  id: "cart",
  state: (): any => {
    return {
      products: [
        {
          ...product1,
          quantity: 1,
        },
      ],
    };
  },
  actions: {
    add(product: any) {
      const { $_, $toast }: any = useNuxtApp();
      const index = $_.findIndex(this.products, { id: product.id });
      if (index >= 0) {
        this.products[index].quantity++;
        $toast.success("Successfully added to cart!");
      } else {
        this.products.push({
          ...product,
          quantity: 1,
        });
        $toast.success("Successfully added to cart!");
      }
    },
    remove(index: number) {
      this.products.splice(index, 1);
    },
    update(id: number, quantity: number) {
      const { $_, $toast }: any = useNuxtApp();
      const index = $_.findIndex(this.products, { id });

      this.products[index].quantity = quantity;
    },
  },
  getters: {
    totalPrice: (state) => {
      const route: any = useRoute();
      const { $_ } = useNuxtApp();
    },
  },
});
