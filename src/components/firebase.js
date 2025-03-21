import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDukqDsiCw_4Fb_gReCr9dcwt65is15HE4",
  authDomain: "vishnuponoli-portfolio-a70d0.firebaseapp.com",
  projectId: "vishnuponoli-portfolio-a70d0",
  storageBucket: "vishnuponoli-portfolio-a70d0.firebasestorage.app",
  messagingSenderId: "38979303054",
  appId: "1:38979303054:web:8a1086143501ec67e3fbdf",
  measurementId: "G-RY0HDYK7KY",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
