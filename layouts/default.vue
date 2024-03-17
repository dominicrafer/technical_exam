<template>
  <q-layout view="hHh lpR fff">
    <Header />

    <q-page-container>
      <q-page >
        <NuxtPage  class="min-h-[500px]"/>
      </q-page>
    </q-page-container>

    <Footer />
  </q-layout>
</template>
<script setup lang="ts"></script>
<style lang="postcss" scoped></style>
