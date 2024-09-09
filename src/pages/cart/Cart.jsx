
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../../components/cards copy/cartitems/CartItems";
import { removeItem } from "../../redux/slices/cartSlice";
import "./Cart.scss";

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state) => state.cart.items);

	const handleDelete = (id, size) => {
		dispatch(removeItem({ id, size }));
	};

	const calculateTotal = () => {
		return cartItems.reduce((total, item) => {
			const itemPrice = parseFloat(item.price) || 0;
			const itemQuantity = parseInt(item.quantity, 10) || 1;
			return total + itemPrice * itemQuantity;
		}, 0);
	};

	return (
		<section className="cart-main">
			<h2>My Cart</h2>
			<section className="cart-child">
				<section className="cart-left">
					{cartItems.length > 0 ? (
						cartItems.map((item) => (
							<CartItems
								key={`${item.id}-${item.size}`}
								item={item}
								onDelete={handleDelete}
							/>
						))
					) : (
						<p>Your cart is empty.</p>
					)}
				</section>
				<section className="cart-right">
					<h2>Bill</h2>
					{cartItems.length > 0 ? (
						<ul className="bill-items">
							{cartItems.map((item) => (
								<li key={`${item.id}-${item.size}`} className="bill-item">
									<span>
										{item.productName} (Size: {item.size})
									</span>
									<span>
										₹{parseFloat(item.price).toFixed(2)} x {item.quantity}
									</span>
								</li>
							))}
						</ul>
					) : (
						<p>No items in the cart.</p>
					)}
					<hr />
					<section className="total-cost">
						<p>
							Total:<span>₹ {calculateTotal().toFixed(2)}</span>{" "}
						</p>
					</section>
					<section className="checkout-btn">
						<button onClick={() => alert("Proceed to Checkout")}>
							Checkout
						</button>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Cart;
