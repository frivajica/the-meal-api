const globalMin = 10;
const globalMax = 100;

function generateRandom(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Set middle limits and avoid their colisions.
const lowerMiddle = generateRandom(globalMin, globalMax - 1);
const upperMiddle = generateRandom(lowerMiddle + 1, globalMax);

export function generatePrice(category: string) {
  switch (category) {
    case "Pork":
      return generateRandom(globalMin, lowerMiddle);
    case "Beef":
      return generateRandom(lowerMiddle, upperMiddle);
    case "Lamb":
      return generateRandom(upperMiddle, globalMax);
    default:
      return generateRandom(globalMin, globalMax);
  }
}
