import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAOOC8P0CvQjhPlTNgEUV8dkb3EsHjtps8",
  authDomain: "endgame-post-web.firebaseapp.com",
  projectId: "endgame-post-web",
  storageBucket: "endgame-post-web.appspot.com",
  messagingSenderId: "1084361024336",
  appId: "1:1084361024336:web:f81102054e7c504aac4255",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
