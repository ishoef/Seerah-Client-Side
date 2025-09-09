import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc"; 
import { AuthContext } from "../../../Context/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

export default function GoogleLogin() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  // google auth provider
  const provider = new GoogleAuthProvider();

  const handleLoginWithGoogle = async () => {
    console.log("Clicked Google login");

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      console.log("Firebase UID:", user?.uid);

      if (user?.uid) {
        // Send User Data to Your Backend
        const response = await axios.post(
          "https://seerah-data.vercel.app/users",
          {
            name: user?.displayName,
            email: user?.email,
            uid: user?.uid,
            role: "user",
            photoURL: user?.photoURL,
            provider: "google",
            extraData: {
              creationDate: user?.metadata?.creationTime,
              lastLogin: user?.metadata?.lastSignInTime,
            },
          }
        );

        if (response.status === 200 || response.status === 201) {
          console.log("User saved successfully:", response.data);
        } else {
          console.warn("User not saved properly:", response);
        }
      }

      // Navigate After Login
      navigate(location.state?.from || "/");
    } catch (error) {
      console.error("Google Login Error:", error.code, error.message);
    }
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleLoginWithGoogle}
        type="button"
        className="cursor-pointer flex items-center gap-3 px-5 py-3 rounded-lg border border-gray-300 shadow hover:shadow-md transition bg-white dark:bg-gray-800"
      >
        <FcGoogle className="w-6 h-6" />
        <span className="text-gray-700 dark:text-gray-200 font-medium">
          Continue with Google
        </span>
      </button>
    </div>
  );
}
