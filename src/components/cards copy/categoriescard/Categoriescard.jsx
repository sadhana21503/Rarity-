import { useState } from "react";
import { Link } from "react-router-dom";
import "./Categoriescard.scss"
const Categoriescard = ({ name, image1, image2, path }) => {
	const [hover, setHover] = useState(false);

	return (
		<section className="category-main">
			<Link to={path} className="category-item">
				<section className="category-image">
					<img
						onMouseEnter={() => {
							setHover((prev) => !prev);
						}}
						src={hover ? image1 : image2}
						alt={name}
					/>
				</section>
				<section className="category-name">
					<p>{name}</p>
				</section>
			</Link>
		</section>
	);
};

export default Categoriescard;
