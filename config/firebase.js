import firebase from 'firebase';


const config = {
	apiKey: 'AIzaSyDeTQyCEUc6XEJN0iTpQs190mxSuAZV-Zk',
	authDomain: 'clashofcodes-406da.firebaseapp.com',
	databaseURL: 'https://clashofcodes-406da.firebaseio.com',
	projectId: 'clashofcodes-406da',
	storageBucket: 'clashofcodes-406da.appspot.com',
	messagingSenderId: '1084420795634',
};

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
