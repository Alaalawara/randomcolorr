import chroma from 'chroma-js';

// Types of two-color schemes
export function generatePalette() {
  const maxTries = 10;
  let primaryColor, secondaryColor, contrast;

  for (let i = 0; i < maxTries; i++) {
    primaryColor = chroma.random();
    secondaryColor = chroma.random();

    contrast = chroma.contrast(primaryColor, secondaryColor); // WCAG 2.1 contrast ratio
    if (contrast >= 4.5) break; // minimum accessible contrast
  }

  return [primaryColor.hex(), secondaryColor.hex()];
}
