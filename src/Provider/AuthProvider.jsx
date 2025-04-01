import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const creteLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const profileUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  const userSignOut = () => {
    return signOut(auth);
  };

  const createGoogleUser = () => {
    return signInWithPopup(auth, provider);
  };

  useEffect(() => {
    const disconnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      disconnect();
    };
  }, []);

  const userInfo = {
    user,
    setUser,
    createUser,
    creteLogin,
    profileUser,
    createGoogleUser,
    userSignOut,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
export { AuthContext };
