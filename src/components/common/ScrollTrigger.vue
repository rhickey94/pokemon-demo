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
  <div class="infinite-trigger" ref="trigger">
    <font-awesome-icon icon="spinner" size="2x" fixed-width pulse />
    <!-- <i class="fa-solid fa-sync fa-spin fa-2xl"></i> -->
  </div>
</template>

<style>
.infinite-trigger {
  display: flex;
  width: 200px;
  height: 200px;
  justify-content: center;
  align-items: center;
}
</style>
