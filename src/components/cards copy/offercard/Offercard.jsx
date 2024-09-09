import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Offercard.scss";
const Offercard = ({ name, image1, image2, description,path }) => {
	const [hover, setHover] = useState(false);
	return (
		<section className="offercard-main">
			<Link to={path} className="offercard-container">
				<section className="offer-image">
					<img
						onMouseEnter={() => {
							setHover((prev) => !prev);
						}}
						src={hover ? image1 : image2}
						alt={name}
					/>
				</section>
				<section className="offer-description">
					<p>{name}</p>
					<span>{description}</span>
				</section>
			</Link>
		</section>
	);
};

export default Offercard;
