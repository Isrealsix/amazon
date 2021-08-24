import Image from 'next/image';
import { useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';
import { useSession } from 'next-auth/client';
import { selectItems, selectTotal } from '../slices/basketSlice';
import Header from '../components/Header';
import CheckoutProduct from '../components/CheckoutProduct';

function Checkout() {
	const items = useSelector(selectItems);
	const [session] = useSession();
	const total = useSelector(selectTotal);
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
							{!items.length
								? 'Your Shopping Basket is empty'
								: 'Shopping Basket'}
						</h1>

						{items.map((item, idx) => (
							<CheckoutProduct
								key={idx}
								id={item.id}
								title={item.title}
								rating={item.rating}
								description={item.description}
								category={item.category}
								image={item.image}
								price={item.price}
								isPrime={item.isPrime}
								quantity={item.quantity}
							/>
						))}
					</div>
				</div>

				{/* Right */}
				<div className="flex flex-col bg-white p-10 shadow-md">
					{items.length > 0 && (
						<>
							<h2 className="whitespace-nowrap">
								Subtotal ({items.length} items):{' '}
								{
									<span className="font-bold">
										<Currency quantity={total} currency="RUB" />
									</span>
								}
							</h2>
							{console.log(session)}
							<button
								role="link"
								disabled={!session}
								className={`button mt-2 ${
									!session &&
									'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'
								}`}
							>
								{!session ? 'Sign in to checkout' : 'Proceed to checkout'}
							</button>
						</>
					)}
				</div>
			</main>
		</div>
	);
}

export default Checkout;
