import { useState, useEffect } from "react";
import { AuthContext } from "./Contexts";
import { auth, firestore } from "../utils/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import {
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

const COLORS = [
  "#bf94ff",
  "#ff6b6b",
  "#4ecdc4",
  "#ffd93d",
  "#6bcb77",
  "#4d96ff",
  "#ff922b",
  "#da77f2",
  "#74c0fc",
  "#f783ac",
  "#a9e34b",
  "#ff6b9d",
  "#63e6be",
  "#ffa94d",
  "#748ffc",
];

function randomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export function AuthProvider({ children }) {
  const [state, setState] = useState({
    user: null,
    profile: null,
    loading: true,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setState({ user: null, profile: null, loading: false });
        return;
      }

      try {
        const ref = doc(firestore, "users", user.uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
          setState({ user, profile: snap.data(), loading: false });
        } else {
          const newProfile = {
            uid: user.uid,
            displayName: user.displayName ?? user.email.split("@")[0],
            color: randomColor(),
            avatar: (user.displayName ?? user.email)[0].toUpperCase(),
            createdAt: Date.now(),
          };
          await setDoc(ref, newProfile);
          setState({ user, profile: newProfile, loading: false });
        }
      } catch (err) {
        console.error("profile fetch error:", err);
        setState({ user, profile: null, loading: false });
      }
    });

    return () => unsubscribe();
  }, []);

  const logout = () => signOut(auth);

  const GoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (err) {
      console.error("Google sign in error:", err.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        profile: state.profile,
        loading: state.loading,
        logout,
        GoogleSignIn,
      }}
    >
      {!state.loading && children}
    </AuthContext.Provider>
  );
}
