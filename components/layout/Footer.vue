<template>
  <q-footer elevated class="bg-primary text-white">
    <q-toolbar
      class="p-6 flex flex-col gap-3 text-center justify-around md:flex-row md:text-left md:items-start"
    >
      <ul
        v-for="(menuDetails, index) in footerMenus"
        :key="index"
        class="space-y-2"
      >
        <li class="text-lg pb-2 tracking-widest">{{ menuDetails.title }}</li>
        <li
          class="menu"
          v-for="(menu, menuIndex) in menuDetails.menus"
          :key="menuIndex"
        >
          {{ menu }}
        </li>
      </ul>
      <div class="ml-3">
        <span class="text-lg pb-2 tracking-widest"
          >SUBSCRIBE TO NEWSLETTER</span
        >
        <div class="flex flex-nowrap gap-2 items-center mt-4">
          <InputField
            label="Email"
            name="email"
            dense
            v-model="email"
            rounded
            class="flex-grow"
          ></InputField>
          <Button label="SIGN ME UP" class="bg-warning" no-caps />
        </div>
      </div>
    </q-toolbar>
  </q-footer>
</template>
<script setup lang="ts">
const footerMenus = [
  {
    title: "SUPPORT",
    menus: ["Support Center", "Returns", "Shipping", "Contact Us"],
  },
  {
    title: "ABOUT",
    menus: ["Support Center", "Returns", "Shipping", "Contact Us"],
  },
  {
    title: "SHOP",
    menus: ["Support Center", "Returns", "Shipping", "Contact Us"],
  },
];
const email = ref(null);
</script>
