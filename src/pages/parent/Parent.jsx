import { Outlet } from "react-router-dom";
import "./parent.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
const Parent = () => {
	return (
		<>
			<section className="parent">
				<Navbar />
				<Outlet />
				<Footer />
			</section>
		</>
	);
};

export default Parent;
