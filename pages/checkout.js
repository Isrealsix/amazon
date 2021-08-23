import Image from 'next/image';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import { selectItems } from '../slices/basketSlice';
import CheckoutProduct from '../components/CheckoutProduct';
const Checkout = () => {
	const items = useSelector(selectItems);
	return (
		<div>
			<Header />
			<main className="lg:flex max-w-screen-2xl mx-auto">
				{/* Left */}
				<div className="flex-grow m-5 shadow-sm">
					<Image
						src="https://links.papareact.com/ikj"
						width={1020}
						height={250}
						objectFit="contain"
					/>

					<div className="flex flex-col p-5 space-y-10 bg-white">
						<h1 className="text-3xl border-b  pb-4">
							{!items.length ? 'Your Shopping Basket' : 'Shopping Basket'}
						</h1>

						{items.map((item, idx) => (
							<CheckoutProduct
								key={item.id}
								id={item.id}
								title={item.title}
								rating={item.rating}
								description={item.description}
								category={item.category}
								image={item.image}
								isPrime={item.isPrime}
							/>
						))}
					</div>
				</div>

				{/* Right */}
				<div></div>
			</main>
		</div>
	);
};

export default Checkout;
