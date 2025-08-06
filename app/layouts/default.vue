<script setup lang="ts">
import type { NavigationMenuItem } from "@nuxt/ui";

const items = ref<NavigationMenuItem[]>([
  {
    label: "Home",
    icon: "i-material-symbols-light:in-home-mode-outline",
    to: "/",
  },
  {
    label: "New Route",
    icon: "i-material-symbols-light:connecting-airports",
    to: "/newRoute",
  },
  {
    label: "Dynamic Route",
    icon: "i-material-symbols-light:filter-9-plus-outline-sharp",
    to: "/dynamic-anystring/123",
  },
]);
</script>

<template>
  <!-- <div class="flex flex-row justify-center w-200 gap-4 m-2">
    <NuxtLink to="/">Home page</NuxtLink>
    <NuxtLink to="/newRoute">New Route page</NuxtLink>
    <NuxtLink to="/dynamic-anystring/123">dynamic id page</NuxtLink>
  </div> -->

  <UNavigationMenu :items="items" class="w-full justify-left" />

  <slot />
</template>
