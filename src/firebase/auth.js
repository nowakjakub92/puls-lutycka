import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

// Rejestracja użytkownika
export const registerUser = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Błąd rejestracji:", error.message);
    throw error;
  }
};

// Logowanie użytkownika
export const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    console.error("Błąd logowania:", error.message);
    throw error;
  }
};

// Wylogowanie użytkownika
export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Błąd wylogowania:", error.message);
    throw error;
  }
};

export default auth;
