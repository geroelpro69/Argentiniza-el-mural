import React, { useState } from 'react';

const gridSize = 100;

export default function App() {
  const [selected, setSelected] = useState(null);

  const handlePixelClick = (x, y) => {
    setSelected({ x, y });
  };

  const pixels = [];
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      const key = `${x}-${y}`;
      pixels.push(
        <div
          key={key}
          onClick={() => handlePixelClick(x, y)}
          style={{
            width: 4,
            height: 4,
            backgroundColor: 'white',
            border: '0.5px solid #ccc',
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
          title={`Pixel (${x}, ${y})`}
        />
      );
    }
  }

  return (
    <div style={{ backgroundColor: '#f5f0e6', minHeight: '100vh', padding: 20, textAlign: 'center' }}>
      <h1 style={{ color: '#0a5cae' }}>🇦🇷 Argentiniza el Mural 🇦🇷</h1>
      <p>Comprá tu lugar en el mural digital argentino. Cada pixel vale $500.</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${gridSize}, 4px)`,
          justifyContent: 'center',
          margin: '20px auto',
          width: gridSize * 4,
          userSelect: 'none'
        }}
      >
        {pixels}
      </div>

      {selected && (
        <div
          style={{
            marginTop: 20,
            backgroundColor: 'white',
            padding: 15,
            borderRadius: 8,
            maxWidth: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
            boxShadow: '0 0 10px rgba(0,0,0,0.1)'
          }}
        >
          <h2 style={{ color: '#0a5cae' }}>¡Seleccionaste un pixel!</h2>
          <p>
            Posición: <strong>X:</strong> {selected.x}, <strong>Y:</strong> {selected.y}
          </p>
          <p style={{ fontSize: 12, color: '#666', marginTop: 10 }}>
            (En el futuro, este espacio podría mostrar tu imagen, link o mensaje personalizado)
          </p>
        </div>
      )}
    </div>
  );
}