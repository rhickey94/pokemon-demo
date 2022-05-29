<script setup>
import { ref, onMounted, onDeactivated } from "vue";

const observer = ref(null);
const trigger = ref(null);

const observerOptions = {
  type: Object,
  default: {
    threshold: "1",
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
  <div class="scroll-trigger" ref="trigger"></div>
</template>

<style>
.scroll-trigger {
  width: 0;
  height: 0;
  margin: 0;
}
</style>
