import "./style.css"
function Navbar () {
    return (
        <div>
            <div className="alert alert-primary" role="alert">
 Black Friday! Desconto progressivo!  5 discos = 7% OFF /  10 discos = 12% OFF
             </div>
        <h1>BALLADS DISCO STORE</h1>
            <nav className = "navbar">
                <ul>
                    <li className="menu"><a href="https://github.com/itsamandagn">Home</a></li>
                    <li className="menu"><a href="https://github.com/itsamandagn">Gênero Musical</a></li>
                    <li className="menu"><a href="https://github.com/itsamandagn">Contato</a></li>
                    <li className="menu"><a href="https://github.com/itsamandagn">Quem somos</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;