export const useLotteryData = () => {
  // Mock lottery draws data
  const draws = ref([
    {
      id: 1,
      game: "Lotto 6/49",
      date: "2026-02-07",
      numbers: [7, 14, 23, 31, 42, 49],
      bonus: 12,
      jackpot: 5000000,
    },
    {
      id: 2,
      game: "Lotto Max",
      date: "2026-02-06",
      numbers: [3, 11, 19, 28, 35, 41, 48],
      bonus: 22,
      jackpot: 75000000,
    },
    {
      id: 3,
      game: "Lotto 6/49",
      date: "2026-02-04",
      numbers: [5, 18, 27, 33, 39, 44],
      bonus: 8,
      jackpot: 4200000,
    },
    {
      id: 4,
      game: "Lotto Max",
      date: "2026-02-03",
      numbers: [2, 9, 17, 25, 38, 42, 50],
      bonus: 15,
      jackpot: 70000000,
    },
    {
      id: 5,
      game: "Lotto 6/49",
      date: "2026-02-01",
      numbers: [6, 13, 21, 29, 36, 47],
      bonus: 19,
      jackpot: 3800000,
    },
    {
      id: 6,
      game: "Lotto Max",
      date: "2026-01-30",
      numbers: [4, 12, 20, 31, 37, 45, 49],
      bonus: 11,
      jackpot: 68000000,
    },
  ]);

  // Generate random numbers for lottery
  const generateRandomNumbers = (count: number, max: number): number[] => {
    const numbers = new Set<number>();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * max) + 1);
    }
    return Array.from(numbers).sort((a, b) => a - b);
  };

  // Calculate most frequent numbers across all draws
  const getMostFrequentNumbers = () => {
    const frequency: Record<number, number> = {};

    draws.value.forEach((draw) => {
      draw.numbers.forEach((num) => {
        frequency[num] = (frequency[num] || 0) + 1;
      });
    });

    return Object.entries(frequency)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 10);
  };

  return {
    draws,
    generateRandomNumbers,
    getMostFrequentNumbers,
  };
};
