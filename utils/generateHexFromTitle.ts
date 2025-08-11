// utils/generateHexFromTitle.ts
// Utility to generate a random hex color code from a string (e.g., title)

export function generateHexFromTitle(title: string): string {
  // Simple hash function to get a number from the string
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  // Convert hash to hex color
  let color = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    color += ("00" + value.toString(16)).slice(-2);
  }
  return color;
}
