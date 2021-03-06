import Image from 'next/dist/client/image';
import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import { useDispatch } from 'react-redux';
import Currency from 'react-currency-formatter';
import { addToBasket } from '../slices/basketSlice';

const MAX_N = 5;
const MIN_N = 1;
const Product = ({ title, id, price, description, category, image }) => {
	const dispatch = useDispatch();
	const [rating] = useState(
		Math.floor(Math.random() * (MAX_N - MIN_N + 1)) + MIN_N
	);
	const [isPrime] = useState(Math.random() < 0.5);

	const addItemToBasket = () => {
		const product = {
			title,
			id,
			price,
			description,
			category,
			image,
			rating,
			isPrime,
		};
		dispatch(addToBasket(product));
	};
	return (
		<div className="relative flex flex-col m-5 bg-white z-30 p-10">
			<p className="absolute top-2 right-2 text-xs italic text-gray-400">
				{category}
			</p>
			<Image src={image} height={200} width={200} objectFit="contain" />
			<h4 className="my-3">{title}</h4>
			<div className="flex">
				{Array(rating)
					.fill()
					.map((_, idx) => (
						<StarIcon key={idx} className="h-5 text-yellow-500" />
					))}
			</div>
			<p className="text-xs my-2 line-clamp-2">{description}</p>

			<div className="mb-5">
				<Currency quantity={price} currency="RUB" />
			</div>

			{isPrime && (
				<div className="flex items-center space-x-2 -mt-5">
					<img
						className="w-12"
						src="https://links.papareact.com/fdw"
						alt="primed"
					/>
					<p className="text-xs text-gray-500">FRREE NEXT-day Delivery</p>
				</div>
			)}
			<button className="mt-auto button" onClick={addItemToBasket}>
				Add to Basket
			</button>
		</div>
	);
};

export default Product;
