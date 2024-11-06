
import "./style.css"
export function Item({ produto }) {
    return (
        <div className="produto">
          <img src={produto.foto} alt={`Capa do disco ${produto.titulo}`} />
          <h2>{produto.titulo}</h2>
          <p>{produto.descricao}</p>
        </div>
    );
}
    
