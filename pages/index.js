import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Amazon 2 Clone</title>
			</Head>
			{/* Header */}
			<h2 className="bg-red-700 text-gray-700">Testing</h2>
			<Header />
		</div>
	);
}
