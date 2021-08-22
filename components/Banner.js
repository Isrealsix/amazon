import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const Banner = () => {
	return (
		<div className="relative">
			<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showIndicators={false}
				showThumbs={false}
				interval={5000}
			>
				<div>
					<img
						src="https://links.papareact.com/gi1"
						loading="lazy"
						alt="banner 1"
					/>
				</div>
				<div>
					<img
						src="https://links.papareact.com/6ff"
						loading="lazy"
						alt="banner 2"
					/>
				</div>
				<div>
					<img
						src="https://links.papareact.com/7ma"
						loading="lazy"
						alt="banner 3"
					/>
				</div>
			</Carousel>
		</div>
	);
};

export default Banner;
