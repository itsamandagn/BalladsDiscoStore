import CartWidget from "../CartWidget";
import "./style.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <a href="https://github.com/itsamandagn">Home</a>
          </li>
          <li>
            <a href="https://github.com/itsamandagn">Gênero Musical</a>
          </li>
          {/* <ul className="submenu">
                        <li><a href="#">Rock</a></li>
                        <li><a href="#">Pop</a></li>
                        <li><a href="#">MPB</a></li>
                        <li><a href="#">Jazz</a></li>
                        <li><a href="#">Blues</a></li>
                        <li><a href="#">Clássicos</a></li>
                </ul> */}
          <li>
            <a href="https://github.com/itsamandagn">Contato</a>
          </li>
          <li>
            <a href="https://github.com/itsamandagn">Quem somos</a>
          </li>
        </ul>
        <div className = "carrinho"><CartWidget/></div>
      </nav>
    </div>
  );
}

export default Navbar;
