import { useState } from "react";
import home from "../../assets/images/home.jpg";
import sale from "../../assets/images/sale.jpg";
import "./home.scss";
import Categoriescard from "../../components/cards copy/categoriescard/Categoriescard";
import Offercard from "../../components/cards copy/offercard/Offercard";
import { categories, offers } from "../../utilities";
import Carousel from "../../components/slider/Carousel";
const Home = () => {
	const [selectedCategory, setSelectedCategory] = useState("Shirts");
	const [selectedGender, setSelectedGender] = useState("Men");

	return (
		<>
			<section className="home-container">
				<section className="home-top">
					<img src={home} alt="Home Page Banner" />
					<button
						className="shop-now-button"
						onClick={() => (window.location.href = "/shop")}
					>
						Shop Now
					</button>
				</section>
				<section className="home-category1">
					<h2 style={{ textTransform: "uppercase" }}>CATEGORIES</h2>
					<section className="home-category-button">
						<button
							onClick={() => setSelectedGender("Men")}
							className={selectedGender === "Men" ? "active-button" : ""}
						>
							Men
						</button>
						<button
							onClick={() => setSelectedGender("Women")}
							className={selectedGender === "Women" ? "active-button" : ""}
						>
							Women
						</button>
					</section>
					<section className="categories">
						<Carousel>
							{categories[selectedGender]?.map((category) => (
								<Categoriescard key={category.id} {...category} />
							))}
						</Carousel>
					</section>
				</section>
				<section className="home-offers1">
					<h2 style={{ textTransform: "uppercase" }}>SALES</h2>
					<img className="offers-image" src={sale} alt="sales" />
					<section className="home-offer-button">
						<button
							onClick={() => setSelectedCategory("Shirts")}
							className={selectedCategory === "Shirts" ? "active-button" : ""}
						>
							Shirts
						</button>
						<button
							onClick={() => setSelectedCategory("TShirts")}
							className={selectedCategory === "TShirts" ? "active-button" : ""}
						>
							T-Shirts
						</button>
						<button
							onClick={() => setSelectedCategory("Jeans")}
							className={selectedCategory === "Jeans" ? "active-button" : ""}
						>
							Jeans
						</button>
					</section>
					<section className="home-offer-container">
						<Carousel>
							{offers[selectedCategory]?.map((offer) => (
								<Offercard key={offer.id} {...offer} />
							))}
						</Carousel>
					</section>
				</section>
			</section>
		</>
	);
};

export default Home;
