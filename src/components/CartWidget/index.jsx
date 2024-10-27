
import { MdOutlineShoppingCart } from "react-icons/md";
import "./style.css"

function CartWidget() {
  return (
    <div className="cart-widget">
     <MdOutlineShoppingCart />
      <p>2</p>
    </div>
  );
}

export default CartWidget;
