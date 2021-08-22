import Image from 'next/image';
import {
	MenuIcon,
	SearchIcon,
	ShoppingCartIcon,
} from '@heroicons/react/outline';

const Header = () => {
	return (
		<header>
			{/* Top */}
			<div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
				<div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
					<Image
						src="https://links.papareact.com/f90"
						width={150}
						height={40}
						alt="logo"
						objectFit="contain"
						className="cursor-pointer"
					/>
				</div>

				<div className="bg-red-700">
					<SearchIcon className="h-6 text-black" />
					<input type="text" placeholder="test" className="bg-black" />
				</div>
			</div>

			{/* Bottom */}
			<div></div>
		</header>
	);
};

export default Header;
