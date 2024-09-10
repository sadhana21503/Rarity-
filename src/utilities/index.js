import { v4 as uuid4 } from "uuid";

const categories = {
	Men: [
		{
			name: "Shirt",
			path: "/category/shirt",
			image1:
				"https://bluorng.com/cdn/shop/files/rd3dwws.jpg?v=1723798394&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork_26938.jpg?v=1721028475&width=360",
			id: uuid4(),
		},
		{
			name: "T-Shirt",
			path: "/category/tshirt",
			image1:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork888.jpg?v=1722699893&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork908.jpg?v=1723475570&width=360",
			id: uuid4(),
		},
		{
			name: "Pants",
			path: "/category/pant",
			image1:
				"https://bluorng.com/cdn/shop/files/blackpant.jpg?v=1721033042&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled-6.jpg?v=1722410882&width=360",
			id: uuid4(),
		},
		{
			name: "Shorts",
			path: "/category/short",
			image1:
				"https://bluorng.com/cdn/shop/files/shorts.jpg?v=1717575289&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/swed.jpg?v=1717575203&width=360",
			id: uuid4(),
		},
		{
			name: "Joggers",
			path: "/category/jogger",
			image1:
				"https://bluorng.com/cdn/shop/files/DSC047966.jpg?v=1682854190&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/DSC08607.png?v=1688450563&width=360",
			id: uuid4(),
		},
		{
			name: "Sweaters",
			path: "/category/sweater",
			image1:
				"https://bluorng.com/cdn/shop/products/favour-green-sweatshirt-244545.jpg?v=1672130320&width=360",
			image2:
				"https://bluorng.com/cdn/shop/products/green-dragon-sweatshirt-771262.jpg?v=1666293150&width=360",
			id: uuid4(),
		},
		{
			name: "SweatShirts",
			path: "/category/sweatshirts",
			image1:
				"https://bluorng.com/cdn/shop/products/image.heic?v=1670479696&width=360",
			image2:
				"https://bluorng.com/cdn/shop/products/black-kraken-hoodie-109065.jpg?v=1667677513&width=360",
			id: uuid4(),
		},
		{
			name: "Hoodies",
			path: "/category/jacket",
			image1:
				"https://bluorng.com/cdn/shop/products/basic-red-hoodie-851668.jpg?v=1671744051&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/IMG-6220.jpg?v=1703478951&width=360",
			id: uuid4(),
		},
	],
	Women: [
		{
			name: "Shirt",
			path: "/category/shirt",
			image1:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork888.jpg?v=1722699893&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork908.jpg?v=1723475570&width=360",

			id: uuid4(),
		},
		{
			name: "T-Shirt",
			path: "/category/tshirt",
			image1:
				"https://bluorng.com/cdn/shop/files/rd3dwws.jpg?v=1723798394&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork_26938.jpg?v=1721028475&width=360",
			id: uuid4(),
		},
		{
			name: "Pants",
			path: "/category/pant",
			image1:
				"https://bluorng.com/cdn/shop/files/blackpant.jpg?v=1721033042&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled-6.jpg?v=1722410882&width=360",
			id: uuid4(),
		},
		{
			name: "Shorts",
			path: "/category/short",
			image1:
				"https://bluorng.com/cdn/shop/files/shorts.jpg?v=1717575289&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/swed.jpg?v=1717575203&width=360",
			id: uuid4(),
		},
		{
			name: "Joggers",
			path: "/category/jogger",
			image1:
				"https://bluorng.com/cdn/shop/files/DSC047966.jpg?v=1682854190&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/DSC08607.png?v=1688450563&width=360",
			id: uuid4(),
		},
		{
			name: "Sweaters",
			path: "/category/sweater",
			image1:
				"https://bluorng.com/cdn/shop/products/favour-green-sweatshirt-244545.jpg?v=1672130320&width=360",
			image2:
				"https://bluorng.com/cdn/shop/products/green-dragon-sweatshirt-771262.jpg?v=1666293150&width=360",
			id: uuid4(),
		},
		{
			name: "SweatShirts",
			path: "/category/sweatshirts",
			image1:
				"https://bluorng.com/cdn/shop/products/image.heic?v=1670479696&width=360",
			image2:
				"https://bluorng.com/cdn/shop/products/black-kraken-hoodie-109065.jpg?v=1667677513&width=360",
			id: uuid4(),
		},
		{
			name: "Hoodies",
			path: "/category/jacket",
			image1:
				"https://bluorng.com/cdn/shop/products/basic-red-hoodie-851668.jpg?v=1671744051&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/IMG-6220.jpg?v=1703478951&width=360",
			id: uuid4(),
		},
	],
};

const offers = {
	Shirts: [
		{
			name: "Shirt 1",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/IMG_7510.jpg?v=1719040913&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork_26928.jpg?v=1719040800&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
		{
			name: "Shirt 2",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/IMG_7510.jpg?v=1719040913&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork_26928.jpg?v=1719040800&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
		{
			name: "Shirt 3",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/IMG_7510.jpg?v=1719040913&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork_26928.jpg?v=1719040800&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
		{
			name: "Shirt 4",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/IMG_7510.jpg?v=1719040913&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork_26928.jpg?v=1719040800&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
	],
	TShirts: [
		{
			name: "T-Shirt 1",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork894.jpg?v=1722699980&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/wrcda.jpg?v=1720076038&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
		{
			name: "T-Shirt 2",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork894.jpg?v=1722699980&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/wrcda.jpg?v=1720076038&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
		{
			name: "T-Shirt 3",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork894.jpg?v=1722699980&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/wrcda.jpg?v=1720076038&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
		{
			name: "T-Shirt 4",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/Untitled_Artwork894.jpg?v=1722699980&width=360",
			image2:
				"https://bluorng.com/cdn/shop/files/wrcda.jpg?v=1720076038&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
	],
	Jeans: [
		{
			name: "Jeans 1",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/i3.jpg?v=1710502328&width=360",
			image2:
				"https://bluorng.com/cdn/shop/products/DSC03759.jpg?v=1680850718&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
		{
			name: "Jeans 2",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/i3.jpg?v=1710502328&width=360",
			image2:
				"https://bluorng.com/cdn/shop/products/DSC03759.jpg?v=1680850718&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
		{
			name: "Jeans 3",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/i3.jpg?v=1710502328&width=360",
			image2:
				"https://bluorng.com/cdn/shop/products/DSC03759.jpg?v=1680850718&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
		{
			name: "Jeans 4",
			path: "/product",
			image1:
				"https://bluorng.com/cdn/shop/files/i3.jpg?v=1710502328&width=360",
			image2:
				"https://bluorng.com/cdn/shop/products/DSC03759.jpg?v=1680850718&width=360",
			description: "₹ 5000",
			id: uuid4(),
		},
	],
};
const product = {
	sideImage: [
		{
			img: "https://www.snitch.co.in/cdn/shop/files/4369ae70e755841ff395fd1207a836fc.webp?v=1724416086&width=120",
			id: uuid4(),
		},
		{
			img: "https://www.snitch.co.in/cdn/shop/files/654875bca39c6d25fa864d9b9b51cbc7.webp?v=1724416086&width=120",
			id: uuid4(),
		},
		{
			img: "https://www.snitch.co.in/cdn/shop/files/4b8b6f167cd07b044f7c4924b6f6c6fe.webp?v=1724416086&width=120",
			id: uuid4(),
		},
		{
			img: "https://www.snitch.co.in/cdn/shop/files/1efdf019e10cb852f224264a96e8b558.webp?v=1724416086&width=120",
			id: uuid4(),
		},
		{
			img: "https://www.snitch.co.in/cdn/shop/files/a88835682a42463b372b84f827c2d8c6.webp?v=1724416086&width=120",
			id: uuid4(),
		},
	],
	mainImage: {
		img: "https://www.snitch.co.in/cdn/shop/files/4369ae70e755841ff395fd1207a836fc.webp?v=1724416086&width=1800",
		id: uuid4(),
	},
	productDetails: {
		name: "Peach Plaid Checks Shirt",
		price: 1199,
		color:"Blue",
		desc: [
			{
				id: uuid4(),
				text: "Loose-fitting T-shirt in Tiffany Blue colour with a round neck and short sleeves.",
			},
			{
				id: uuid4(),
				text: "Embroidered with shiny studs in the front.",
			},
		],
		details: [
			{ id: uuid4(), text: "100% cotton" },
			{ id: uuid4(), text: "Weight - 380 GSM" },
			{ id: uuid4(), text: "280+ EMBROIDERED STUDS" },
			{ id: uuid4(), text: "DRY CLEAN ONLY" },
		],
		shipping: [
			{ id: uuid4(), text: "Free delivery Pan-India." },
			{ id: uuid4(), text: "Dispatches Next Day" },
		],
	},
};

export { categories, offers, product};
