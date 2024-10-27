import './App.css';
import Navbar from './components/NavBar';
import Header from './components/NavBar/header';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <ItemListContainer greeting = "Ballads Disco é uma empresa especializada na venda de discos online"/>
    </div>
  );
}

export default App;
