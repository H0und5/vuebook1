import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// firebase import statements and config go here.
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDXHIYiFzoQxfC680UNJuIMGMbTnBYeQVA",

  authDomain: "vuebook1-2233f.firebaseapp.com",

  projectId: "vuebook1-2233f",

  storageBucket: "vuebook1-2233f.appspot.com",

  messagingSenderId: "1088579560422",

  appId: "1:1088579560422:web:2f65547675946ec1b56c27",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Create Vue App
const app = createApp(App);

app.use(router);

app.mount("#app");
