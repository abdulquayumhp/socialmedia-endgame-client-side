import React, { createContext, useEffect, useState } from "react";
import app from "../Context/Firebase";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const ContextAuth = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const UserSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const updateUserInfo = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  const googleSignUp = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    createUser,
    user,
    UserSignIn,
    updateUserInfo,
    userSignOut,
    googleSignUp,
    setLoading,
    loading,
  };

  return (
    <div>
      <ContextAuth.Provider value={authInfo}>{children}</ContextAuth.Provider>
    </div>
  );
};

export default AuthContext;
