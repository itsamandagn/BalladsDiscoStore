import "./header.css"
import { IoSearchSharp } from "react-icons/io5";
function Header() {
  return (
   <div>
    <header>
      <div className="alert alert-primary" role="alert">Black Friday!10% OFF</div>
  <h1>BALLADS DISCO STORE</h1>
  <div className="search-fild">
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="Pesquise o seu disco favorito" aria-label="Search"/>
    <button className="search-btn btn-outline-success my-2 my-sm-0" type="submit"><IoSearchSharp></IoSearchSharp></button>
  </form>
</div>
    </header>
  </div>
  );
}

export default Header;
