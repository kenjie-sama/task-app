// Import the functions you need from the SDKs you need
import { FirebaseApp, FirebaseOptions, initializeApp } from 'firebase/app';
import { Analytics, getAnalytics } from 'firebase/analytics';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyAWqwAd4TCygKPYkhb4wMYCGBA19G64-2c',
  authDomain: 'smart-shoreline-387014.firebaseapp.com',
  projectId: 'smart-shoreline-387014',
  storageBucket: 'smart-shoreline-387014.appspot.com',
  messagingSenderId: '387547929137',
  appId: '1:387547929137:web:72141e227694684f901310',
  measurementId: 'G-SZBHNX2EBV',
};

const app: FirebaseApp = initializeApp(firebaseConfig);
const analytics: Analytics = getAnalytics(app);
