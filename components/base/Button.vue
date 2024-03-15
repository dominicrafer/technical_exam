<template>
  <q-btn v-bind="$attrs" class="rounded-lg" :color="color">
    <slot></slot>
  </q-btn>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    default: "primary",
  },
});
</script>