import { buffer } from 'micro';
import * as admin from 'firebase-admin';

// Secured connection to Firebase from NodeJS
const serviceAccount = require('../../permissions.json');
const app = !admin.apps.length
	? admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
	  })
	: admin.app();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async session => {
	console.log('fulfilling order', session);

	return app
		.firestore()
		.collection('users')
		.doc(session.metadata.email)
		.collection('orders')
		.doc(session.id)
		.set({
			amount: session.amount_total / 100,
			amount_shipping: session.total_details.amount_shipping / 100,
			images: JSON.parse(session.metadata.images),
			timestamp: admin.firestore.FieldValue.serverTimestamp(),
		})
		.then(() => {
			console.log('success: order ' + session.id + ' has been added to the DB');
		});
};

export default async (req, res) => {
	if (req.method === 'POST') {
		const requestBuffer = await buffer(req);
		const payload = requestBuffer.toString();
		const sig = req.headers['stripe-signature'];

		let event;

		// Verify the EVENT posted is from stripe

		try {
			event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
		} catch (err) {
			console.error('errorness of ' + err.message);
			return res.status(400).send('Webhook error: ' + err.message);
		}

		// Handle the checkout.session.completed event
		if (event.type === 'checkout.session.completed') {
			const session = event.data.object;
			// Fulfill order
			return fulfillOrder(session)
				.then(() => res.status(200))
				.catch(err => res.status(400).send('Webhook Error of ' + err.message));
		}
	}
};

export const config = {
	api: {
		bodyParser: false,
		externalResolver: true,
	},
};
