import Firebase from 'firebase';
let config = {
  apiKey: "AIzaSyBlOnqLWGPE8-6ATTYYOjQmmRY4jJwCHOM",
  authDomain: "rnfirebase-8853f.firebaseapp.com",
  databaseURL: "https://rnfirebase-8853f.firebaseio.com",
  projectId: "rnfirebase-8853f",
  storageBucket: "rnfirebase-8853f.appspot.com",
  messagingSenderId: "156497296267",
  appId: "1:156497296267:web:782713f78a5bd6be024d8e",
  measurementId: "G-86ZPVQEMM6"
};
let app = Firebase.initializeApp(config);
export const db = app.database();