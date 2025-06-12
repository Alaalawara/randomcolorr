import { useState } from 'react';
import { generatePalette } from '../utils/generatePalette';
import { HyperText } from "./components/magicui/hyper-text";

function Palette() {
  const [colors, setColors] = useState([]);

  const handleGenerate = () => {
    const newPalette = generatePalette();
    setColors(newPalette);
  };

  const background = colors[0] || '#000000';
  const text = colors[1] || '#ffffff';

  return (
    <div style={{ padding: '2rem', backgroundColor: background, color: text, minHeight: '100vh' }}>
      <RainbowButton onClick={handleGenerate} style={{ padding: '1rem', marginBottom: '2rem',  backgroundColor: background }}>
        Generate Matching Colors
      </RainbowButton>
      <HyperText>Matching Color Palette</HyperText>
      <HyperText>This is a preview of matching colors with background and text.</HyperText>

      <div style={{ display: 'flex', gap: '10px', marginTop: '2rem' }}>
        {colors.map((c, i) => (
          <div key={i} style={{ background: c, width: 100, height: 100, borderRadius: 4 }} />
        ))}
      </div>
    </div>
  );
}

export default Palette;
