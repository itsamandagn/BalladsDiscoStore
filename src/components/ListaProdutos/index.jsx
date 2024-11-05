import { useEffect } from "react";
import "./style.css";
import Produto from "../Produto";

function ListaProdutos({ children}) {
    const produtos = [
        { id: "TheKillers",
          foto: "https://raw.githubusercontent.com/itsamandagn/produtos-loja-ballads-disco/refs/heads/main/produtos/rock/thekillers.jpg",
          titulo: "Sam's Town [Disco de Vinil]",
          descricao: "The Killers"
        },

        { id: "TheBeatles",
          foto: "https://raw.githubusercontent.com/itsamandagn/produtos-loja-ballads-disco/refs/heads/main/produtos/rock/theBeatles.jpg",
          titulo: "Help! [LP]",
          descricao: "The Beatles"
        },

        { id: "Paramore",
          foto: "https://raw.githubusercontent.com/itsamandagn/produtos-loja-ballads-disco/refs/heads/main/produtos/rock/Paramore.jpg",
          titulo: "Riot! [Disco de Vinil]",
          descricao: "Paramore"
        },

        { id: "FooFighters",
          foto: "https://raw.githubusercontent.com/itsamandagn/produtos-loja-ballads-disco/refs/heads/main/produtos/rock/FooFighters.jpg",
          titulo: "Wasting Light [Disco de Vinil]",
          descricao: "Foo Fighters"
        },

        { id: "BillieEilish",
          foto: "https://raw.githubusercontent.com/itsamandagn/produtos-loja-ballads-disco/refs/heads/main/produtos/pop/BillieEilish.jpg",
          titulo: "HIT ME HARD AND SOFT [LP]",
          descricao: "Billie Eilish"
        },

        { id: "LanaDelRey",
          foto: "https://raw.githubusercontent.com/itsamandagn/produtos-loja-ballads-disco/refs/heads/main/produtos/pop/LanaDelRey.jpg",
          titulo: "Born to Die [LP]",
          descricao: "Lana Del Rey"
        },

        { id: "DuaLipa",
          foto: "https://raw.githubusercontent.com/itsamandagn/produtos-loja-ballads-disco/refs/heads/main/produtos/pop/DuaLipa.jpg",
          titulo: "Future Nostalgia [Disco de Vinil]",
          descricao: "Dua Lipa"
        },

        { id: "BritneySpears",
          foto: "https://raw.githubusercontent.com/itsamandagn/produtos-loja-ballads-disco/refs/heads/main/produtos/pop/BrtineySpears.jpg",
          titulo: "Britney [LP]",
          descricao: "Britney Spears"
        },

      ]

        useEffect(() => {
          console.log("Montei a lista de produtos");
    
          return () => {
            console.log("Desmontei a lista de produtos");
          }
        }, []);
    
        return (
          <div>
              { children }
  
              <div className='lista-produtos'>
                     {produtos.map((produto) => (
                    <Produto 
                        key={produto.id} 
                        titulo={produto.titulo} 
                        descricao={produto.descricao} 
                        foto={produto.foto}
                    />
                ))}
</div>

{ children }
</div>
)
}

export default ListaProdutos;

