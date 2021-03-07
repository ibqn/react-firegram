// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from 'firebase/app'

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import 'firebase/analytics'

// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAfH9Tsg5ffqXlEED3voRTwBQD9M0qxues',
  authDomain: 'ibqn-firegram.firebaseapp.com',
  projectId: 'ibqn-firegram',
  storageBucket: 'ibqn-firegram.appspot.com',
  messagingSenderId: '472151340470',
  appId: '1:472151340470:web:c9feabc08096d884bb3d17',
  measurementId: 'G-HN1L4G056F',
}

firebase.initializeApp(firebaseConfig)

const fireStorage = firebase.storage()
const fireStore = firebase.firestore()

const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { fireStorage, fireStore, timestamp }
