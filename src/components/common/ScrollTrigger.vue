<script setup>
import { ref, onMounted, onDeactivated } from "vue";

const observer = ref(null);
const trigger = ref(null);

const observerOptions = {
  type: Object,
  default: {
    threshold: "0",
  },
};

const emit = defineEmits(["triggerIntersected"]);

function handleIntersect(entry) {
  if (entry.intersectionRatio > 0) {
    emit("triggerIntersected");
  }
}

onMounted(() => {
  observer.value = new IntersectionObserver((entries) => {
    handleIntersect(entries[0]);
  }, observerOptions);
  observer.value.observe(trigger.value);
});

onDeactivated(() => {
  observer.value.disconnect();
});
</script>

<template>
  <div ref="trigger"></div>
</template>

<style></style>
