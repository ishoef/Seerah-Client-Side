import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../Context/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";

export default function GoogleLogin() {
  const { auth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const provider = new GoogleAuthProvider();


const handleLoginWithGoogle = async () => {
  console.log("Clicked Google login");

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    console.log("Firebase UID:", user?.uid);

    if (!user?.uid) throw new Error("No user data returned from Google.");

    // Optional: show success alert
    Swal.fire({
      title: `Welcome, ${user.displayName}!`,
      text: "You have successfully logged in.",
      icon: "success",
      iconColor: "#124170", // Orange icon to match your theme
      background: "#DDF4E7", // Clean white background
      backdrop: "rgba(0,0,0,0.3)", // Slight dark overlay
      timer: 2000,
      timerProgressBar: true, // Show progress bar
      showConfirmButton: false,
      customClass: {
        title: "text-xl font-bold text-orange-600",
        content: "text-gray-700",
      },
    });

    // Redirect after login
    navigate(`${location.state ? location.state : "/"}`);

    // Prepare payload for backend
    const payload = {
      name: user.displayName,
      email: user.email,
      uid: user.uid,
      role: "user",
      photoURL: user.photoURL,
      provider: "google",
      extraData: {
        creationDate: user.metadata?.creationTime,
        lastLogin: user.metadata?.lastSignInTime,
      },
    };

    // Send to backend (works for new or existing users)
    const response = await axios.post(
      "https://seerah-data.vercel.app/users",
      payload
    );

    console.log(
      response.status === 201
        ? "New user saved successfully."
        : "Existing user logged in.",
      response.data
    );
  } catch (error) {
    console.error("Google Login Error:", error.code, error.message);

    // Show error alert
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error.message || "An error occurred during Google login.",
    });
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
