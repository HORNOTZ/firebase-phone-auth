// Import the functions you need from the SDKs you need
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber, signInWithCredential, PhoneAuthProvider } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx",
  measurementId: "xxx"
};

// Initialize Firebase
window.app = initializeApp(firebaseConfig);
window.auth = getAuth(app);
window.analytics = getAnalytics(app);

// auth.languageCode = 'it';
auth.useDeviceLanguage();

// https://firebase.google.com/docs/auth/web/phone-auth?hl=en&authuser=0#web
window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // ...
    // onSignInSubmit();
    console.log("Capcha processed");
  },
  'expired-callback': () => {
    // Response expired. Ask user to solve reCAPTCHA again.
    // ...
  }
});

window.signInWithPhoneNumber = signInWithPhoneNumber;
window.signInWithCredential = signInWithCredential;
window.PhoneAuthProvider = PhoneAuthProvider;