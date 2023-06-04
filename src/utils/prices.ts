const globalMin = 10;
const globalMax = 100;

const lowerMiddle = generateRandom(globalMin, globalMax);
const upperMiddle = generateRandom(lowerMiddle, globalMax);

function generateRandom(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

// Avoid limit colisions.
const lowerMiddleFixed =
  lowerMiddle === globalMin
    ? lowerMiddle + 1
    : lowerMiddle === globalMax
    ? lowerMiddle - 1
    : lowerMiddle;
const upperMiddleFixed =
  upperMiddle === globalMax
    ? upperMiddle - 1
    : upperMiddle === lowerMiddleFixed
    ? upperMiddle + 1
    : upperMiddle;

export function generatePrice(category: string) {
  switch (category) {
    case "Pork":
      return generateRandom(globalMin, lowerMiddleFixed);
    case "Beef":
      return generateRandom(lowerMiddleFixed, upperMiddleFixed);
    case "Lamb":
      return generateRandom(upperMiddleFixed, globalMax);
    default:
      return generateRandom(globalMin, globalMax);
  }
}
