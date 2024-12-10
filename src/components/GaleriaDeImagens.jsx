import React, { useState } from 'react';

function GaleriaDeImagens() {
  const [imagens, setImagens] = useState([
    'https://img.icons8.com/?size=100&id=l5HER4tCxDsO&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=WgGiBAo2tXpR&format=png&color=000000',
    'https://img.icons8.com/?size=100&id=q9rGeBEhyJ2G&format=png&color=000000'
  ]);

  const adicionarImagem = () => {
    setImagens([...imagens, 'https://via.placeholder.com/150']);
  };
  
  return (
    <div>
      <h2>Galeria de Imagens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {imagens.map((imagem, index) => (
          <img key={index} src={imagem} alt={`Imagem ${index + 1}`} style={{ margin: '5px' }} />
        ))}
      </div>
      <button onClick={adicionarImagem} style={{ marginTop: '1px' }}>Adicionar Imagem</button>
    </div>
  );
}

export default GaleriaDeImagens;
