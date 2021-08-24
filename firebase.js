import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCoABGAI1FkGXEEkokWkdZooNHZ2CXE7kQ',
	authDomain: 'fir-c373f.firebaseapp.com',
	projectId: 'fir-c373f',
	storageBucket: 'fir-c373f.appspot.com',
	messagingSenderId: '493115472225',
	appId: '1:493115472225:web:13cd8fba1b61aa2fefed20',
};

const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();

export default db;
