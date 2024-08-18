import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";

export default register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/register", {
        email,
        password,
      });

      if (response.status === 201) {
        setSuccess("Registration successful! Redirecting to login...");
        setTimeout(() => {
          router.push("/User/login");
        }, 2000);
      }
    } catch (error) {
      setError(error.response?.data?.error || "Registration failed");
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        {error && <p className="text-red-500">{error}</p>} {/* Show error */}
        {success && <p className="text-green-500">{success}</p>}{" "}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
              className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700"
          >
            Register
          </button>
          <p className="mt-4 text-sm text-gray-600">
            Already registered?{" "}
            <span
              href="/User/login"
              className="text-blue-500 hover:underline"
              onClick={() => {
                router.push("/User/login");
              }}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};
