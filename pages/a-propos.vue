<template>
  <div class="bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
    <main class="max-w-4xl mx-auto px-4 py-8">
      <div class="mb-6">
        <h2 class="text-4xl font-bold text-gray-800 mb-2">
          À Propos de Loto Tracker
        </h2>
        <p class="text-gray-600 text-lg">
          Un projet de démonstration technique
        </p>
      </div>

      <div class="space-y-6">
        <div class="bg-white rounded-xl shadow-lg p-8">
          <h3 class="text-2xl font-bold mb-4 text-indigo-600">
            Objectif du Projet
          </h3>
          <p class="text-gray-700 leading-relaxed">
            Loto Tracker est une application web développée avec
            <strong>Nuxt.js 3</strong>
            pour démontrer la maîtrise des technologies frontend modernes. Cette
            application permet de consulter les résultats de loterie, analyser
            les statistiques historiques, et générer des combinaisons aléatoires
            de numéros.
          </p>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8">
          <h3 class="text-2xl font-bold mb-4 text-indigo-600">
            Technologies Utilisées
          </h3>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span
                ><strong>Nuxt.js 3</strong> avec Composition API pour une
                architecture moderne et performante</span
              >
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span
                ><strong>TypeScript</strong> pour la sûreté de type et
                l'expérience développeur</span
              >
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span
                ><strong>Tailwind CSS</strong> pour un design responsive et
                moderne</span
              >
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span
                ><strong>Composables Vue</strong> pour la réutilisabilité du
                code</span
              >
            </li>
            <li class="flex items-start gap-2">
              <span class="text-green-600 font-bold">✓</span>
              <span
                ><strong>SSR & SSG</strong> pour l'optimisation SEO et les
                performances</span
              >
            </li>
          </ul>
        </div>

        <div class="bg-amber-50 border-2 border-amber-200 rounded-xl p-8">
          <h3
            class="text-2xl font-bold mb-4 text-amber-800 flex items-center gap-2"
          >
            Jeu Responsable
          </h3>
          <div class="text-amber-900 space-y-3">
            <p class="font-semibold">
              Cette application est un projet de démonstration technique
              uniquement.
            </p>
            <p class="text-sm leading-relaxed">
              Si vous jouez à des jeux de loterie, nous vous encourageons à le
              faire de manière responsable. Le jeu doit rester un
              divertissement. Si vous ou quelqu'un que vous connaissez avez des
              difficultés avec le jeu, des ressources d'aide sont disponibles.
            </p>
            <div class="mt-4 p-4 bg-white rounded-lg">
              <p class="text-sm font-semibold mb-2">Ressources d'aide :</p>
              <ul class="text-sm space-y-1">
                <li>• Jeu : Aide et Référence - 1-800-461-0140</li>
                <li>
                  •
                  <a
                    href="https://www.jouez-sensé.ca"
                    class="text-indigo-600 hover:underline"
                    target="_blank"
                    >jouez-sensé.ca</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-xl shadow-lg p-8">
          <h3 class="text-2xl font-bold mb-4 text-indigo-600">Développé Par</h3>
          <div class="flex items-center gap-4">
            <div
              class="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold"
            >
              RN
            </div>
            <div>
              <p class="font-bold text-lg">Rima Nafougui</p>
              <p class="text-gray-600">
                Étudiante en Développement Web - Cégep Ahuntsic
              </p>
              <div class="flex gap-3 mt-2">
                <a
                  href="https://github.com/Mercuryy200"
                  target="_blank"
                  class="text-indigo-600 hover:text-indigo-800 text-sm"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/rima-nafougui"
                  target="_blank"
                  class="text-indigo-600 hover:text-indigo-800 text-sm"
                >
                  LinkedIn
                </a>
                <a
                  href="https://rimanafougui.com"
                  target="_blank"
                  class="text-indigo-600 hover:text-indigo-800 text-sm"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
