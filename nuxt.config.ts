import tailwindConfig from "./tailwind.config";
const { primary, secondary }: any = tailwindConfig.theme?.extend?.colors;
export default defineNuxtConfig({
  ssr: false,
  typescript: {
    strict: true,
    typeCheck: true
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "nuxt-quasar-ui"],
  googleFonts: {
    /* module options */
    families: {
      Bryant: true // Include the Bryant font
    },
    display: "swap" // optional
  },
  css: ["@/assets/css/main.css"],
  quasar: {
    config: {
      brand: {
        primary,
        secondary
      }
    }
  },
  components: [
    {
      path: "~/components", // will get any components nested in let's say /components/test too
      pathPrefix: false
    }
  ],
  tailwindcss: {
    exposeConfig: true
  }
});
