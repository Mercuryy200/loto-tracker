<template>
  <div class="bg-gray-50 min-h-screen">
    <main class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-6">
        <h2 class="text-4xl font-bold text-gray-800 mb-2">
          Statistiques et Analyses
        </h2>
        <p class="text-gray-600 text-lg">
          Découvrez les tendances et numéros les plus fréquents
        </p>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 mb-6">
        <h3 class="text-2xl font-bold mb-6 text-indigo-600">
          Numéros les Plus Fréquents
        </h3>
        <p class="text-gray-600 mb-6">
          Basé sur l'analyse de {{ draws.length }} tirages récents
        </p>
        <div class="grid grid-cols-5 md:grid-cols-10 gap-4">
          <div
            v-for="([number, count], index) in frequentNumbers"
            :key="number"
            class="text-center"
          >
            <div class="relative">
              <NumberBall :number="Number(number)" />
              <span
                v-if="index < 3"
                class="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 text-yellow-900 rounded-full flex items-center justify-center text-xs font-bold"
              >
                {{ index + 1 }}
              </span>
            </div>
            <p class="text-sm font-semibold text-gray-700 mt-2">{{ count }}x</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8">
        <h3 class="text-2xl font-bold mb-4 text-indigo-600">
          Distribution des Tirages
        </h3>
        <p class="text-gray-600 mb-6">
          Visualisation de la fréquence d'apparition des numéros
        </p>
        <div
          class="h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center"
        >
          <div class="text-center">
            <p class="text-gray-500 mb-2">Graphique de distribution</p>
            <p class="text-sm text-gray-400">(Chart.js integration à venir)</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { draws, getMostFrequentNumbers } = useLotteryData();
const frequentNumbers = getMostFrequentNumbers();
</script>
