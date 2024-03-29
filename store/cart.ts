import { defineStore } from "pinia";
export const useCartStore = defineStore({
  id: "cart",
  persist: true,
  state: (): any => {
    return {
      products: [],
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
  },
  getters: {
    totalPrice: (state) => {
      const { $_ } = useNuxtApp();

      return $_.sumBy(
        state.products,
        (product: any) => product.quantity * product.price
      );
    },
  },
});
