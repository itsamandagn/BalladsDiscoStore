import { useState } from "react";

function ItemCount({ initial = 1, stock = 10, onAdd }) {
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

    return (
        <div>
            <div>
                <button onClick={subtrairProduto}>-</button>
                <span>{count}</span>
                <button onClick={adicionarProduto}>+</button>
            </div>
        </div>
    );
}

export default ItemCount;
