import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);

  // Create a new user
  const createUser = (email, password) => {
    setLoadingAuth(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login a existing user
  const login = (email, password) => {
    setLoadingAuth(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // update user info
  const updateUserData = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };

  // Logout the user
  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadingAuth(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authData = {
    auth,
    user,
    setUser,
    loadingAuth,
    setLoadingAuth,
    createUser,
    login,
    logOut,
    updateUserData,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
}
