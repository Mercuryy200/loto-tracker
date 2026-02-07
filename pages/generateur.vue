<template>
  <div class="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen">
    <main class="max-w-4xl mx-auto px-4 py-8">
      <div class="mb-6">
        <h2 class="text-4xl font-bold text-gray-800 mb-2">
          Générateur de Numéros Chanceux
        </h2>
        <p class="text-gray-600 text-lg">
          Laissez le hasard choisir vos combinaisons gagnantes
        </p>
      </div>

      <div class="bg-white rounded-xl shadow-xl p-8">
        <div class="mb-8">
          <label class="block text-sm font-semibold text-gray-700 mb-3">
            Choisissez votre jeu préféré
          </label>
          <select
            v-model="selectedGame"
            class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none text-lg"
          >
            <option value="649">Lotto 6/49 (6 numéros de 1-49)</option>
            <option value="max">Lotto Max (7 numéros de 1-50)</option>
          </select>
        </div>

        <button
          @click="generate"
          class="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-lg hover:from-green-700 hover:to-emerald-700 transition text-xl shadow-lg"
        >
          Générer Mes Numéros Chanceux
        </button>

        <div v-if="generatedNumbers.length > 0" class="mt-8">
          <div
            class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6"
          >
            <h3 class="text-xl font-bold mb-4 text-center text-green-800">
              Vos Numéros Chanceux
            </h3>
            <div class="flex gap-3 justify-center flex-wrap mb-4">
              <NumberBall
                v-for="num in generatedNumbers"
                :key="num"
                :number="num"
              />
            </div>
            <p class="text-center text-sm text-gray-600">
              {{ selectedGame === "649" ? "Lotto 6/49" : "Lotto Max" }}
            </p>
          </div>

          <div class="mt-6 text-center">
            <p class="text-lg font-semibold text-green-700 mb-2">
              Bonne chance!
            </p>
            <p class="text-sm text-gray-500">
              N'oubliez pas de jouer de façon responsable.
            </p>
          </div>

          <button
            @click="generate"
            class="w-full mt-4 py-3 bg-white border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition"
          >
            Générer de Nouveaux Numéros
          </button>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { generateRandomNumbers } = useLotteryData();

const selectedGame = ref("649");
const generatedNumbers = ref<number[]>([]);

const generate = () => {
  if (selectedGame.value === "649") {
    generatedNumbers.value = generateRandomNumbers(6, 49);
  } else {
    generatedNumbers.value = generateRandomNumbers(7, 50);
  }
};
</script>
