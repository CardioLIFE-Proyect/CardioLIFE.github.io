import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBoAZjSPKNkoIxna1ki74w_CD67lgX8xqk",
    authDomain: "cardiolife-57e0e.firebaseapp.com",
    databaseURL: "https://cardiolife-57e0e-default-rtdb.firebaseio.com",
    projectId: "cardiolife-57e0e",
    storageBucket: "cardiolife-57e0e.firebasestorage.app",
    messagingSenderId: "1048541758744",
    appId: "1:1048541758744:web:6b5b58b9bbb6d4647b0a6d",
    measurementId: "G-HVW9TP7F40"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  def 