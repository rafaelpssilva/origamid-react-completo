import React from 'react'

function App() {

  const luana = {
    cliente: 'luana',
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" }
    ], 
    ativa: true
  }

  console.log(luana.compras)

  return (
    <>
      <p>
        {luana.compras.map(compra => compra.nome)}
      </p>
    </>
  );
}

export default App;
