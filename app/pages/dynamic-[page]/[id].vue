<script setup lang="ts">
const toast = useToast();

function showToast() {
  toast.add({
    title: "Success",
    description: "Your action was completed successfully.",
    color: "primary",
    close: {
      color: "primary",
      variant: "outline",
      class: "rounded-full",
    },
  });
}
</script>

<template>
  <p>{{ $route.params.page }} - {{ $route.params.id }}</p>

  <UButton
    label="Show toast"
    color="success"
    variant="outline"
    @click="showToast"
  />
</template>
