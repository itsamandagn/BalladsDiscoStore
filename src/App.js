import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import Header from "./components/NavBar/header";
import ItemListContainer from "./components/ItemListContainer";
import ListaProdutos from "./components/ListaProdutos";

import Produto from "./components/Produto";
import ItemCount from "./components/ItemListContainer/itemCount";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ItemListContainer
        greeting="
        Ballads
        Disco
        é
        uma
        empresa
        especializada
        na
        venda
        de
        discos"
      />
      <ListaProdutos />
      <ItemCount/>
    </div>
  );
}

export default App;
