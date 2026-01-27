import { initializeApp } from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTKB5AZhfOzaqtDEdeG884CyPB9jw9T2o",
  authDomain: "farm-gate-ab486.firebaseapp.com",
  projectId: "farm-gate-ab486",
  storageBucket: "farm-gate-ab486.firebasestorage.app",
  messagingSenderId: "367098070857",
  appId: "1:367098070857:web:396ca58495742c4160bc98",
  measurementId: "G-DTBNT6Q55T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth for use in your app
export const firebaseAuth = auth(app);

export default app;
