<template>
  <div class="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition">
    <div class="flex justify-between items-start mb-4">
      <div>
        <h3 class="text-xl font-bold text-gray-800">{{ draw.game }}</h3>
        <p class="text-sm text-gray-500">{{ formatDate(draw.date) }}</p>
      </div>
      <div class="text-right">
        <p class="text-xs text-gray-500">Gros lot</p>
        <p class="text-lg font-bold text-green-600">
          {{ formatCurrency(draw.jackpot) }}
        </p>
      </div>
    </div>

    <div class="flex gap-2 flex-wrap mb-3">
      <NumberBall
        v-for="number in draw.numbers"
        :key="number"
        :number="number"
      />
    </div>

    <div class="flex items-center gap-2 text-sm text-gray-600">
      <span>Complémentaire:</span>
      <NumberBall :number="draw.bonus" :is-bonus="true" />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Draw {
  id: number;
  game: string;
  date: string;
  numbers: number[];
  bonus: number;
  jackpot: number;
}

defineProps<{
  draw: Draw;
}>();

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString("fr-CA", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
    maximumFractionDigits: 0,
  }).format(amount);
};
</script>
