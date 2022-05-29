<script setup>
defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
});
</script>

<template>
  <div>hi id is {{ id }}</div>
  <div>pokemon name is {{ name }}</div>
</template>

<style></style>
