import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../Context/AuthProvider";

export default function LoginForm() {
  const { login, setLoading } = useContext(AuthContext);

  // Controlled state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      await login(email, password);
      console.log("✅ Login successful!");
      setLoading(false);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("❌ Login error:", err.message);
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // পরে এখানে Google sign-in implement করবে
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white text-center">
          Sign in
        </h2>
        <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
          Welcome back! Please login to your account.
        </p>

        {/* Form */}
        <form onSubmit={onSubmit} className="mt-6 space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>

          {/* Error */}
          {error && (
            <p className="text-red-500 text-sm mt-1 text-center">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full flex justify-center py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow transition duration-200 disabled:opacity-50"
          >
            {submitting ? "Signing in..." : "Log In"}
          </button>
        </form>

        {/* Google login */}
        <div className="mt-6 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 mr-2">or</span>
          <button
            onClick={handleGoogleLogin}
            type="button"
            className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:shadow-md transition bg-white dark:bg-gray-700 dark:text-white"
          >
            <FcGoogle className="w-5 h-5" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
