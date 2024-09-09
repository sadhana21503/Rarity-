import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import "./Product.scss";
import { product } from "../../utilities";
import size from "../../assets/images/size.jpg";

const Product = () => {
	const [selectedImage, setSelectedImage] = useState(product.mainImage.img);
	const [selectedSize, setSelectedSize] = useState(null);
	const [showSizeChart, setShowSizeChart] = useState(false);
	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const navigate = useNavigate(); // Use navigate for redirecting
	const dispatch = useDispatch();

	const handleImageClick = (imageSrc) => {
		setSelectedImage(imageSrc);
	};

	const handleSizeSelect = (size) => {
		setSelectedSize(size);
	};

	const toggleSizeChart = () => {
		setShowSizeChart(!showSizeChart);
	};

	// Add to cart logic
	const addToCart = () => {
		if (selectedSize) {
			dispatch(
				addItem({
					id: product.productDetails.id,
					productName: product.productDetails.name,
					price: product.productDetails.price,
					size: selectedSize,
					color: product.productDetails.color,
					ProductImg: selectedImage,
					quantity: 1,
				})
			);
			setIsAddedToCart(true);
		} else {
			alert("Please select a size before adding to cart.");
		}
	};

	// Handle Buy Now - adds to cart and then navigates
	const handleBuyNow = (e) => {
		e.preventDefault();
		if (selectedSize) {
			addToCart(); // Add item to cart first
			navigate("/cart"); // Then navigate to cart page
		} else {
			alert("Please select a size before proceeding.");
		}
	};

	return (
		<section className="product-main">
			<section className="product-top">
				<section className="product-top-left">
					<section className="product-side-images">
						{product.sideImage.map((image) => (
							<img
								key={image.id}
								src={Object.values(image)[0]}
								alt=""
								onClick={() => handleImageClick(Object.values(image)[0])}
								className={
									selectedImage === Object.values(image)[0] ? "active" : ""
								}
							/>
						))}
					</section>
					<section className="product-main-image">
						<img src={selectedImage} alt="" />
					</section>
				</section>
				<section className="product-top-right">
					<section className="product-name">
						<h2>{product.productDetails.name}</h2>
						<p>Price: ₹{product.productDetails.price}</p>
						<p>Color: {product.productDetails.color}</p>
					</section>
					<section className="product-details">
						<section className="desc">
							<h2>Description</h2>
							{product.productDetails.desc.map((description) => (
								<p key={description.id}>{description.text}</p>
							))}
						</section>
						<section className="desc">
							<h2>Details</h2>
							{product.productDetails.details.map((detail) => (
								<p key={detail.id}>{detail.text}</p>
							))}
						</section>
						<section className="desc">
							<h2>Shipping</h2>
							{product.productDetails.shipping.map((info) => (
								<p key={info.id}>{info.text}</p>
							))}
						</section>
					</section>
					<section className="product-size">
						<section className="product-size-top">
							<h3>Select a Size</h3>
							<button onClick={toggleSizeChart}>Size Chart</button>
						</section>
						<section className="product-size-bottom">
							<form>
								<section className="size-options">
									{["XS", "S", "M", "L", "XL", "2XL", "3XL", "4XL"].map(
										(size) => (
											<button
												type="button"
												key={size}
												className={`size-box ${
													selectedSize === size ? "selected" : ""
												}`}
												onClick={() => handleSizeSelect(size)}
											>
												{size}
											</button>
										)
									)}
								</section>
								{showSizeChart && (
									<section className="size-chart-image">
										<img src={size} alt="Size Chart" />
									</section>
								)}
								<section className="product-buttons">
									{isAddedToCart ? (
										<Link to="/cart">
											<button type="button">Go to cart</button>
										</Link>
									) : (
										<button type="button" onClick={addToCart}>
											Add to cart
										</button>
									)}
									<button type="button" onClick={handleBuyNow}>
										Buy now
									</button>
								</section>
							</form>
						</section>
					</section>
				</section>
			</section>
		</section>
	);
};

export default Product;
