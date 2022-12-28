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

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const UserSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const updateUserInfo = (userInfo) => {
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
  };

  return (
    <div>
      <ContextAuth.Provider value={authInfo}>{children}</ContextAuth.Provider>
    </div>
  );
};

export default AuthContext;
