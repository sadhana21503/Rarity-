import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../../redux/slices/cartSlice";

import "./CartItems.scss";
import { MdDelete } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

const CartItems = ({ item, onDelete }) => {
	const dispatch = useDispatch();

	const handleIncrement = () => {
		dispatch(
			updateQuantity({
				id: item.id,
				size: item.size,
				quantity: item.quantity + 1,
			})
		);
	};

	const handleDecrement = () => {
		if (item.quantity > 1) {
			dispatch(
				updateQuantity({
					id: item.id,
					size: item.size,
					quantity: item.quantity - 1,
				})
			);
		} else {
			onDelete(item.id, item.size);
		}
	};

	const handleDelete = () => {
		onDelete(item.id, item.size);
	};

	return (
		<section className="cart-card">
			<section className="cart-card-left">
				<section className="product-image">
					<img src={item.ProductImg} alt={item.productName} />
				</section>

				<section className="cart-item-desc">
					<h3>{item.productName}</h3>
					<p>Size: {item.size}</p>
					<p>Color: {item.color || "Not specified"}</p>
					<p>Quantity: {item.quantity}</p>
					<p>
						Price: ₹<span>{item.price * item.quantity}</span>
					</p>
				</section>
			</section>

			<section className="itemButtons">
				<button className="delete-button" onClick={handleDelete}>
					<MdDelete />
				</button>
				<section className="plus-minus-button">
					<button onClick={handleDecrement}>
						<TiMinus />
					</button>
					<button onClick={handleIncrement}>
						<FaPlus />
					</button>
				</section>
			</section>
		</section>
	);
};

export default CartItems;
