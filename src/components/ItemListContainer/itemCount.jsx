import { useState } from "react";

function ItemCount({ initial = 1, stock = 5, onAdd }) {
  const [count, setCount] = useState(initial);

  const adicionarProduto = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const subtrairProduto = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const adicionarAoCarrinho = () => {
     onAdd(count);
  };

  return (
    <div>
      <div>
        <button onClick={subtrairProduto}>-</button>
        <span>{count}</span>
        <button onClick={adicionarProduto}>+</button>
      </div>
      { <button onClick={adicionarAoCarrinho}>Adicionar ao carrinho</button> }
    </div>
  );
}

export default ItemCount;
