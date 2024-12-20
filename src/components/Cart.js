import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); // subscribing to the store using a selector
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart()); //to clear the cart
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold"> Cart Items</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 && (
          <div>Your card is empty, please add items to your cart 😊</div>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
