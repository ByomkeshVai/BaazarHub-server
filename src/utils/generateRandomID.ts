export function generateRandomID() {
  const min = 10000; // Minimum 5-digit number (10000)
  const max = 99999; // Maximum 5-digit number (99999)
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}
