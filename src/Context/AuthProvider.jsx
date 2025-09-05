import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    auth,
    user,
    setUser,
    loading,
    setLoading,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
}
