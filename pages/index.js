// https://amazon-orpin.vercel.app/
// https://amazon-d35v1p7i6-fb-zero.vercel.app/api/auth/signin/google
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Banner from '../components/Banner';
import Header from '../components/Header';
import ProductFeed from '../components/ProductFeed';

export default function Home({ products }) {
	return (
		<div className="bg-gray-100">
			<Head>
				<title>Amazon 2 Clone</title>
			</Head>
			{/* Header */}

			<Header />
			<main className="max-w-screen-2xl mx-auto">
				{/* Banner */}
				<Banner />
				{/* Product feed */}
				<ProductFeed products={products} />
			</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	const session = await getSession(context);
	const products = await fetch('https://fakestoreapi.com/products').then(res =>
		res.json()
	);

	return {
		props: {
			products,
			session,
		},
	};
}
