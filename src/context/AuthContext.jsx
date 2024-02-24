import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // user.phoneNumber = "01010055884"
            // updateProfile(user, {
            //     phoneNumber: phone,
            //   });
            // if(user.emailVerified===true){
            setCurrentUser(user)
            setLoading(false)
            // }
        })

        return () => unsubscribe();
    }, []);
    return (
        <AuthContext.Provider value={{ currentUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};