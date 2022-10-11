
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD09YMu7Qojzi3LlmwjGB5jAAeg8nCKg84",
    authDomain: "todo-app-cp-21966.firebaseapp.com",
    projectId: "todo-app-cp-21966",
    storageBucket: "todo-app-cp-21966.appspot.com",
    messagingSenderId: "228251009516",
    appId: "1:228251009516:web:4a5adc9a9cf8a7df5a80c9",
    measurementId: "G-5BK5WVEH8T"
});

const db = firebaseApp.firestore();

export default db;