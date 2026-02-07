<template>
  <div class="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
    <main class="max-w-7xl mx-auto px-4 py-8">
      <div class="mb-8">
        <h2 class="text-4xl font-bold text-gray-800 mb-2">
          Derniers Résultats de Loterie
        </h2>
        <p class="text-gray-600 text-lg">
          Consultez les tirages les plus récents et leurs statistiques
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <LotteryCard v-for="draw in draws" :key="draw.id" :draw="draw" />
      </div>

      <div class="bg-white rounded-xl shadow-lg p-8 text-center">
        <h3 class="text-2xl font-bold mb-4">Explorez Plus</h3>
        <div class="flex gap-4 justify-center flex-wrap">
          <NuxtLink
            to="/statistiques"
            class="px-8 py-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold text-lg shadow-md"
          >
            Voir les Statistiques
          </NuxtLink>
          <NuxtLink
            to="/generateur"
            class="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition font-semibold text-lg shadow-md"
          >
            Générer des Numéros
          </NuxtLink>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const { draws } = useLotteryData();
</script>
