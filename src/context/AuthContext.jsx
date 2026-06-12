import { useState, useEffect } from "react";
import { AuthContext } from "./Contexts";
import { auth } from "../utils/firebase";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.log("Google Error occurred, ", err.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout, GoogleSignIn }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
