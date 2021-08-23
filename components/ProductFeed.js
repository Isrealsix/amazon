import Product from './Product';
const ProductFeed = ({ products }) => {
	return (
		<div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
			{products
				.slice(0, 4)
				.map(({ title, id, price, description, category, image }) => (
					<Product
						id={id}
						key={id}
						title={title}
						price={price}
						description={description}
						image={image}
						category={category}
					/>
				))}

			<img
				className="md:col-span-full"
				src="https://links.papareact.com/dyz"
				alt=""
			/>

			<div className="md:col-span-2">
				{products
					.slice(4, 5)
					.map(({ title, id, price, description, category, image }) => (
						<Product
							id={id}
							key={id}
							title={title}
							price={price}
							description={description}
							image={image}
							category={category}
						/>
					))}
			</div>
			{products
				.slice(5)
				.map(({ title, id, price, description, category, image }) => (
					<Product
						id={id}
						key={id}
						title={title}
						price={price}
						description={description}
						image={image}
						category={category}
					/>
				))}
		</div>
	);
};

export default ProductFeed;
