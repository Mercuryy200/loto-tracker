<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Global Navigation -->
    <nav class="bg-white shadow-sm sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="flex items-center gap-2">
            <h1 class="text-2xl font-bold text-indigo-600">Loto Tracker</h1>
          </NuxtLink>

          <div class="flex gap-4">
            <NuxtLink
              to="/"
              class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Accueil
            </NuxtLink>
            <NuxtLink
              to="/statistiques"
              class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Statistiques
            </NuxtLink>
            <NuxtLink
              to="/generateur"
              class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Générateur
            </NuxtLink>
            <NuxtLink
              to="/a-propos"
              class="px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              À Propos
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Content -->
    <NuxtPage />

    <!-- Global Footer -->
    <footer class="bg-gray-800 text-white mt-16">
      <div class="max-w-7xl mx-auto px-4 py-8">
        <div class="text-center">
          <p class="text-sm text-gray-400 mb-2">
            Loto Tracker - Résultats et Statistiques de Loterie
          </p>
          <p class="text-xs text-gray-500">
            Ceci est un projet de démonstration. Jouez de façon responsable.
          </p>
          <p class="text-xs text-gray-500 mt-2">
            Fait avec par Rima Nafougui | Février 2026
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* Optional: Add smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
