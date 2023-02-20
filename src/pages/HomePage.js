import React, { useState, useEffect, useRef } from "react";
import ProductCard from './sub_components/Card'
import ABCard from "./sub_components/adCard";

import NavBar from './sub_components/NavBar';
import Footer from './sub_components/Footer';
import TopItems from './sub_components/TopItems';

import Carousel from "react-elastic-carousel";

function HomePage() {

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 550, itemsToShow: 1 },
		{ width: 768, itemsToShow: 1 },
		{ width: 1200, itemsToShow: 1 },
	  ];
	
	const [searchTerm, setSearchTerm] = useState('');
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('https://fakestoreapi.com/products?limit=6')
			.then(res => res.json())
			.then(products_array => {
				console.log(products_array);
				// [{
				// category, description, id, image, price, rating, title
				// }]
				// Get the first 10 products
				setProducts(products_array);
			});
	}, []);

	const carouselRef = useRef(null);
	const containerRef = useRef(null);

	let scroll = 0;
	const leftscroll = () => {
		scroll -= 200;
		containerRef.current.scroll({
			left: scroll,
			behavior: 'smooth'
		});
	};

	const rightscroll = () => {
		scroll += 200;
		containerRef.current.scroll({
			right: scroll,
			behavior: 'smooth'
		});
	};

	return (
		<div className="bodyTag">
			<NavBar />
			{/* <!-- Banner --> */}
			<div className="banner">
				<h1>Your Premium <br /> Sound, Unplugged!</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
				<button>Find out more</button>
			</div>
			{/* <!-- End of Banner --> */}


			<div className="productHeading">
				<h1>Our Premium	Collection</h1>
			</div>

			<div className="productCategories">
				<div className="productCat"><a href="#">All Products</a></div>
                <div className="productCat"><a href="#">Coats & Jackets</a></div>
                <div className="productCat"><a href="#">Dressed</a></div>
                <div className="productCat"><a href="#">Playsuit</a></div>
				<div className="productCat"><a href="#">Short</a></div>
				<div className="productCat"><a href="#">Skirt</a></div>
				<div className="productCat"><a href="#">T-Shirt</a></div>
			</div>
			{/* Product Collection */}
			<div className="products">
				
				{products.map(product => (
					<ABCard
						image={product.image}
						category={product.category}
						title={product.title}
						arrowButton={product.arrowButton}
					/>
				))}
			</div>
			<div className="productButton">
				<a href="#"><button>Find out more</button></a>
			</div>
			{/* End of Product Collection */}

			{/* <!-- Top Items --> */}
			<div className="topItemMainDiv">
				<div className="topItemText">
						<h1>Top Items</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod<br/>
						tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
				</div>
				<TopItems
				products = {products}
				/>
			</div>

			{/* <!-- Story about our brand --> */}
			<div className="storyMain">
				<div className="story-container">
					<div className="image-container">
						<img src="bigimage.jpg" alt="Big Image" />
					</div>
					<div className="story">
						<h3>Story About Our Brand</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ex sed odio accumsan finibus eu id velit. Sed ac consectetur enim. Sed iaculis, mauris id pulvinar pretium, lorem arcu tempus nisi, sed venenatis quam arcu auctor leo. Sed vitae lacinia neque.</p>
						<a href="#" className="read-more">Read More</a>
					</div>
				</div>
			</div>


			{/* <!--Our Achievement Div--> */}
			<div className="achievements">
				<h3>Our Achievements</h3>
				<br/>
				<div className="logos">
					<img key={"company1"} src="company1.png" alt="Logo 1" />
					<img key={"company2"} src="company2.png" alt="Logo 2" />
					<img key={"company3"} src="company1.png" alt="Logo 1" />
					<img key={"company4"} src="company2.png" alt="Logo 2" />
					<img key={"company5"} src="company1.png" alt="Logo 1" />
					<img key={"company6"} src="company2.png" alt="Logo 2" />
				</div>
			</div>
			{/* <!--End of Our Achievement Div--> */}

			{/* <!-- client section --> */}

			<div className="testimonial-carousel" ref={carouselRef}>
				<div className="carousel-container" ref={containerRef}>
				<Carousel breakPoints={breakPoints}>
					<div className="testimonial-slide">
						<div className="slide">
							<div className="testimonial-slide1">
								<img src="dummyimage.jpeg"/>
							</div>
							<div className="testimonial-slide2">
								<h1>Good Seller</h1>
								<p>Testimonial 1</p>
								<h2>Anna Saraspova</h2>
								<p>Your Beloved Buyer</p>
							</div>
						</div>
						
					</div>
					<div className="testimonial-slide">
						<div className="slide">
							<div className="testimonial-slide1">
								<img src="dummyimage.jpeg"/>
							</div>
							<div className="testimonial-slide2">
								<h1>Good Seller</h1>
								<p>Testimonial 1</p>
								<h2>Anna Saraspova</h2>
								<p>Your Beloved Buyer</p>
							</div>
						</div>
					</div>
					<div className="testimonial-slide">
						<div className="slide">
							<div className="testimonial-slide1">
								<img src="dummyimage.jpeg"/>
							</div>
							<div className="testimonial-slide2">
								<h1>Good Seller</h1>
								<p>Testimonial 1</p>
								<h2>Anna Saraspova</h2>
								<p>Your Beloved Buyer</p>
							</div>
						</div>
					</div>
				</Carousel>
				</div>
				
			</div>
			{/* <!-- end client section --> */}

			{/* <!-- News Letter Div --> */}
			<div className="newsContainer">
				<div className="newsletter">
					<h3>Join Our News Letters</h3>
					<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. <br /> Iterative approaches to corporate strategy foster </p>
					<form>
						<div className="form-group">
							<input type="email" className="form-control" placeholder="Insert your mail here" />
							<button type="submit" className="btn btn-primary"><i className="fa fa-long-arrow-right"></i></button>
						</div>
					</form>
				</div>
			</div>

			<Footer />
		</div>
	);
}

export default HomePage;