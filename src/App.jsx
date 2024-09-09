import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./pages/parent/Parent";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import FilterPage from './pages/filter/FilterPage';
import Login from './components/auth/login/Login';
import Register from './components/auth/register/Register';
import Cart from "./pages/cart/Cart";

const App = () => {
	return (
		<>
			<section>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Parent />}>
							<Route index element={<Home />} />
							<Route path="/register" element={<Register />} />
							<Route path="/login" element={<Login />} />
							<Route path="/filter" element={<FilterPage />} />
							<Route path ="/product" element={<Product/>}/>
							<Route path ="/cart" element={<Cart/>} />
						</Route>
					</Routes>
				</BrowserRouter>
			</section>
		</>
	);
};

export default App;
