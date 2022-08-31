import { useRecoilState } from "recoil";
import { loginState, signupState } from "../atoms/signAtoms";
import React, { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8000/api/user";

const Signup = () => {
  const [signup, setSignup] = useRecoilState(signupState);
  const [login, setLogin] = useRecoilState(loginState);
  const [username, setUsername] = useState({ username: "" });
  const [email, setEmail] = useState({ email: "" });
  const [password, setPassword] = useState({ password: "" });
  const [confirmPassword, setConfirmPassword] = useState({
    confirmPassword: "",
  });
  const [invalidUser, setInvalidUser] = useState("");
  const [success, setSuccess] = useState(false);
  const [otpSuccess, setOtpSuccess] = useState(false);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [UserId, setUserId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.trim().length < 8) {
      return setError("Password must be longer than 8 characters!");
    }
    if (password !== confirmPassword) {
      return setError("Passwords do not match!");
    }
    try {
      const { data } = await axios.post(`${baseUrl}/create`, {
        username,
        email,
        password,
      });
      if (data.success) {
        setSuccess(true);
        setUserId(data.id);
        console.log(data.id);
      }
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        console.log(data);
        if (!data.success) return setInvalidUser(data.error);
        return console.log(error.response.data);
      }
      console.log(error);
    }
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/verify-email`, {
        UserId,
        otp,
      });
      if (data.success) {
        setSuccess(true);
      }
    } catch (error) {
      if (error?.response?.data) {
        const { data } = error.response;
        console.log(data);
        if (!data.success)
          return setInvalidUser("Thank you, You are now Successfully verified");
        return console.log(error.response.data);
      }
      console.log(error);
    }
  };

  if (invalidUser)
    return (
      <div>
        <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="text-xl font-bold leading-tight text-center mb-8 tracking-tight text-gray-900 md:text-2xl dark:text-white">
                {invalidUser}
              </h2>
              <div className="text-center">
                <button
                  onClick={() => {
                    setSignup(false);
                  }}
                  className="w-1/2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );

  if (success)
    return (
      <div>
        <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="text-xl font-bold leading-tight text-center tracking-tight mb-8 text-gray-900 md:text-2xl dark:text-white">
                Email Verification OTP has been sent your email
              </h2>
              <form
                className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
                onSubmit={handleSubmitOtp}
              >
                <div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Enter your otp
                  </label>
                  <input
                    onChange={({ target }) => setOtp(target.value)}
                    type="text"
                    name="otp"
                    id="otp"
                    className="bg-gray-50 text-center border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1234"
                    required=""
                  />
                </div>
                <p className="text-sm font-medium">OTP will expire in 5 mins</p>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Verify OTP
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );

  if (otpSuccess)
    return (
      <div>
        <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-lg dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="text-xl font-bold leading-tight text-center tracking-tight mb-8 text-gray-900 md:text-2xl dark:text-white">
                Thank you, You are now Successfully verified
              </h2>
              <button
                onClick={() => {
                  setSignup(false);
                }}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Home
              </button>
            </div>
          </div>
        </section>
      </div>
    );

  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="flex justify-between items-center mb-6 space-x-72">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
              ATGWORLD
            </p>
            <button
              onClick={() => {
                setSignup(false);
              }}
            >
              <img src="/x-icon.svg" alt="" className="" />
            </button>
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Username
                  </label>
                  <input
                    onChange={({ target }) => setUsername(target.value)}
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="username"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={({ target }) => setEmail(target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={({ target }) => setPassword(target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    onChange={({ target }) => setConfirmPassword(target.value)}
                    type="confirmPassword"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                {error && (
                  <p className="text-center font-medium text-red-500">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    onClick={() => {
                      setSignup(false);
                      setLogin(true);
                    }}
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
