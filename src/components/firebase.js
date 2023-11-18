import firebase from 'firebase/app';
import 'firebase/auth';

export const auth = firebase
	.initializeApp({
		apiKey: 'AIzaSyACgEMqndrFhJgZD8xgP181-SyAY9ZFu8E',
		authDomain: 'unikchat-bef1d.firebaseapp.com',
		projectId: 'unikchat-bef1d',
		storageBucket: 'unikchat-bef1d.appspot.com',
		messagingSenderId: '1084522566155',
		appId: '1:1084522566155:web:2c78d7947b97a1d9956d0e',
	})
	.auth();
