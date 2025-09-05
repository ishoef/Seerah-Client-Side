import React, { use, useContext } from "react";
import { FcGoogle } from "react-icons/fc"; // Google icon
import { AuthContext } from "../../../Context/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useLocation, useNavigate } from "react-router";

export default function GoogleLogin() {
  const { auth } = use(AuthContext);
  const navigate = useNavigate();
  const locaiton = useLocation();
  // google auth provider
  const provider = new GoogleAuthProvider();
  const handleLoginWithGoogle = () => {
    console.log("i am clicked for login with google");
    signInWithPopup(auth, provider).then((result) => {
      console.log(result.user.uid);
    });
  };

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleLoginWithGoogle}
        type="button"
        className="cursor-pointer flex items-center gap-3 px-5 py-3 rounded-lg border border-gray-300 shadow hover:shadow-md transition bg-white dark:bg-gray-800"
      >
        <FcGoogle className="w-6 h-6" />
        <span className=" text-gray-700 dark:text-gray-200 font-medium">
          Continue with Google
        </span>
      </button>
    </div>
  );
}
