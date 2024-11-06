import { useState,useEffect } from "react";
import "./style.css";
import { ItemList } from "./itemList";
function ItemListContainer({greeting}) {

  const [produtos, setProdutos] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
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

      ])
    },2000 )

    

  }, [])


  return (
    <div className="greeting">
        <ItemList lista={produtos}/>
    </div>
  );
}

export default ItemListContainer;