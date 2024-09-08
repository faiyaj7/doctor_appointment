import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Using email and password manually
export const createUser = async (email, password) => {
  try {
    const newUser = await createUserWithEmailAndPassword(auth, email, password);
    // signing out becos firebase when user is created authenticates automatically. so we signout the user and send them to login.
    await signOut(auth);
    return newUser;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};
export const signInUser = async (email, password) => {
  try {
    const existingUser = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (existingUser) {
      return existingUser.user;
    }
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

export const userLogOut = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

// Get the currently signed-in user
export const userDetails = async () => {
  try {
    const user = onAuthStateChanged(auth);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
};

// Google Provider
// Function to sign in with Google
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    // The signed-in user info
    const user = result.user;
    // You can also retrieve additional user info from `result`
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Google Sign-In Error:", errorCode, errorMessage);
    throw error;
  }
};
