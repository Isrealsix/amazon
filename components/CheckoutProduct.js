import Image from 'next/image';
import {
	StarIcon,
	MinusCircleIcon,
	PlusCircleIcon,
} from '@heroicons/react/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({
	id,
	title,
	price,
	rating,
	description,
	category,
	image,
	isPrime,
	quantity,
}) => {
	const dispatch = useDispatch();

	const addItemToBasket = () => {
		const product = {
			id,
			title,
			price,
			rating,
			description,
			category,
			image,
			isPrime,
		};
		dispatch(addToBasket(product));
	};

	const removeItemFromBasket = () => {
		dispatch(removeFromBasket({ id }));
	};
	return (
		<div className="grid grid-cols-5">
			<Image src={image} height={200} width={200} objectFit="contain" />

			{/* Middle */}
			<div className="col-span-3 mx-5">
				<p>{title}</p>
				<div className="flex">
					{Array(rating)
						.fill()
						.map((_, idx) => (
							<StarIcon key={idx} className="h-5 text-yellow-500" />
						))}
				</div>

				<p className="text-sx my-2 line-clamp-3">{description}</p>
				{<Currency quantity={price} currency="RUB" />}
				{isPrime &
				(
					<div className="flex items-center space-x-2">
						<img
							className="w-12"
							loading="lazy"
							src="https://links.papareact.com/fdw"
							alt="Prime icon"
						/>
						<p className="text-xs text-gray-500">FREE Next-day Delivery</p>
					</div>
				)}
			</div>

			{/* RHS => Add/Remove Buttons */}
			<div className="flex my-auto justify-self-end items-center">
				<button className="button w-10" onClick={removeItemFromBasket}>
					<MinusCircleIcon className="text-gray-800" />
				</button>
				<p className="flex items-center px-5 py-2 bg-gray-200">{quantity}</p>
				<button className="button w-10" onClick={addItemToBasket}>
					<PlusCircleIcon className="text-gray-800" />
				</button>
			</div>
		</div>
	);
};

export default CheckoutProduct;
