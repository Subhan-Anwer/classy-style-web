"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { auth } from "@/lib/firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const toggleModal = () => {
    setError("");
    setIsOpen(!isOpen);
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setIsOpen(false);
      setError(""); // Clear any previous errors
    } catch (err: any) {
      console.error('Google login error:', err);
      let errorMessage = "An error occurred during sign in";
      
      if (err.code) {
        switch (err.code) {
          case 'auth/popup-closed-by-user':
            errorMessage = "Sign in was cancelled";
            break;
          case 'auth/popup-blocked':
            errorMessage = "Pop-up blocked. Please allow pop-ups and try again";
            break;
          case 'auth/cancelled-popup-request':
            errorMessage = "Sign in was cancelled";
            break;
          case 'auth/network-request-failed':
            errorMessage = "Network error. Please check your connection and try again";
            break;
          case 'auth/too-many-requests':
            errorMessage = "Too many attempts. Please try again later";
            break;
          default:
            errorMessage = err.message || "An error occurred during sign in";
        }
      }
      setError(errorMessage);
    }
  };

  const handleEmail = async (e: FormEvent) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      setIsOpen(false);
    } catch (err: any) {
      console.error('Email auth error:', err);
      let errorMessage = "An error occurred during sign in";
      
      if (err.code) {
        switch (err.code) {
          case 'auth/user-not-found':
            errorMessage = "No account found with this email";
            break;
          case 'auth/wrong-password':
            errorMessage = "Incorrect password";
            break;
          case 'auth/invalid-email':
            errorMessage = "Invalid email address";
            break;
          case 'auth/user-disabled':
            errorMessage = "This account has been disabled";
            break;
          case 'auth/email-already-in-use':
            errorMessage = "An account with this email already exists";
            break;
          case 'auth/weak-password':
            errorMessage = "Password should be at least 6 characters";
            break;
          case 'auth/network-request-failed':
            errorMessage = "Network error. Please check your connection and try again";
            break;
          case 'auth/too-many-requests':
            errorMessage = "Too many attempts. Please try again later";
            break;
          default:
            errorMessage = err.message || "An error occurred during sign in";
        }
      }
      setError(errorMessage);
    }
  };

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={toggleModal}
        className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-900 transition"
      >
        {mode === "login" ? "Sign In" : "Sign Up"} {/* new */}
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center w-full max-h-full bg-black bg-opacity-50">
          <div className="bg-white rounded-[8px] py-4 w-full max-w-md relative mx-3">
            {/* <!-- Modal content --> */}
            <div className="relative bg-white">
              {/* <!-- Modal header --> */}
              <div className="flex items-center justify-between my-2 md:px-5 px-4 ">
                <h3 className="md:text-2xl text-xl font-semibold text-gray-900 dark:text-white">
                  {mode === "login" ? "Sign In" : "Sign up"} to Classy Style
                </h3>
                <button
                  onClick={toggleModal}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none bg-transparent justify-center items-center"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    className="md:w-4 w-3 md:h-4 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>

              {/* Divider */}
              <div className="border-b border-gray-300 mt-4 my-2"></div>

              {/* <!-- Modal body --> */}
              <div className="p-2 py-4 md:p-5 space-y-6 ">
                {/* Google / Apple buttons */}
                <div className="space-y-2 mb-8">
                  <button
                    onClick={handleGoogleLogin}
                    className="flex items-center justify-center w-full gap-2 text-black bg-white border-black border border-opacity-75 focus:outline-[#d7931b] font-medium rounded-[6px] text-sm px-5 py-2.5"
                  >
                    <FcGoogle /> Continue with Google
                  </button>

                  <button className="flex items-center justify-center w-full gap-2 text-white bg-black hover:bg-gray-900 focus:outline-[#d7931b] font-medium rounded-[6px] text-sm px-5 py-2.5">
                    <FaApple /> Continue with Apple
                  </button>
                </div>

                <div className="relative text-center">
                  <hr className="border-gray-300" />
                  <span className="absolute top-[-0.7rem] left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-2 text-sm text-gray-500">
                    or
                  </span>
                </div>

                <form className="space-y-4" onSubmit={handleEmail}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Your email
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] focus:outline-[#d7931b] block w-full p-2.5"
                      placeholder="your@gmail.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[6px] focus:outline-[#d7931b] block w-full p-2.5"
                      required
                    />
                  </div>
                  {/* <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          type="checkbox"
                          value=""
                          className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                          required
                        />
                      </div>
                      <label
                        htmlFor="remember"
                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                    <a
                      href="#"
                      className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                    >
                      Lost Password?
                    </a>
                  </div> */}

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    type="submit"
                    className="w-full text-white bg-[#d7931b] rounded-[6px] hover:bg-[rgb(215,140,27)] focus:outline-none focus:ring-0 font-medium text-sm px-5 py-2.5 text-center"
                  >
                    {mode === "login" ? "Sign In" : "Sign Up"} {/* new */}
                  </button>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered?{" "}
                    <Link
                      href="#"
                      className="text-[#be8520] hover:underline focus:outline-none"
                      onClick={() =>
                        setMode(mode === "login" ? "signup" : "login")
                      }
                    >
                      {mode === "login" ? "Sign Up" : "Sign In"} {/* new */}
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
