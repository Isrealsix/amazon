import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
	Providers: [
		Providers.Google({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
		}),
	],
});
