import "./style.css"
import { Item } from "./item";

export function ItemList({ lista }) {
    return <div className = "produtos-container">
        { lista.map((item) => <Item produto={item}/>) }
    </div>
}
