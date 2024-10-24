import "./style.css"
function Navbar () {
    return (
        <div>
        <h1>BALLADS DISCO STORE</h1>
            <nav className = "navbar">
                <ul>
                    <li className="menu"><a href="https://github.com/itsamandagn">Home</a></li>
                    <li className="menu"><a href="https://github.com/itsamandagn">Gênero Musical</a></li>
                    {/* <ul className="submenu">
                        <li><a href="#">Rock</a></li>
                        <li><a href="#">Pop</a></li>
                        <li><a href="#">MPB</a></li>
                        <li><a href="#">Jazz</a></li>
                        <li><a href="#">Blues</a></li>
                        <li><a href="#">Clássicos</a></li>
                </ul> */}
                    <li className="menu"><a href="https://github.com/itsamandagn">Contato</a></li>
                    <li className="menu"><a href="https://github.com/itsamandagn">Quem somos</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;