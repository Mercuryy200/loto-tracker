<template>
  <div
    :class="[
      'w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md',
      isBonus ? 'bg-amber-500' : 'bg-indigo-600',
    ]"
  >
    {{ number }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  number: number;
  isBonus?: boolean;
}>();
</script>
