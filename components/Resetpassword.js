import { useRecoilState } from "recoil";
import { resetPasswordState } from "../atoms/signAtoms";
import React, { useEffect, useState } from "react";
import axios from "axios";
const baseUrl = "http://localhost:8000/api/user";

const Resetpassword = () => {
  const [resetPass, setResetPass] = useRecoilState(resetPasswordState);
  const [email, setEmail] = useState({ email: "" });
  const [invalidUser, setInvalidUser] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // const emailReset = async () => {
  //   try {
  //     const { data } = await axios.post(
  //       `${baseUrl}/verify-token/forgot-password`,
  //       { email }
  //     );
  //   } catch (error) {
  //     if (error?.response?.data) {
  //       const { data } = error.response;
  //       if (!data.success) return setInvalidUser(data.error);
  //       return console.log(error.response.data);
  //     }
  //     console.log(error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${baseUrl}/forgot-password`, {
        email,
      });
      if (data.success) {
        // router.push({ pathname: "/reset" }, undefined, { shallow: true });
        setSuccess(true);
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
                    setResetPass(false);
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
                Password reset Email has been sent your email
              </h2>
              <div className="text-center">
                <button
                  onClick={() => {
                    setResetPass(false);
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

  return (
    <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex justify-between items-center mb-6 space-x-72">
          <p className="text-2xl font-semibold text-gray-900 dark:text-white">
            ATGWORLD
          </p>
          <button
            onClick={() => {
              setResetPass(false);
            }}
          >
            <img src="/x-icon.svg" alt="" className="" />
          </button>
        </div>
        <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Request to Change Password
          </h2>
          <form
            className="mt-4 space-y-4 lg:mt-5 md:space-y-5"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter your email
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
            <p className="text-sm font-medium">
              A request will be send to your email to change the password
            </p>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Reset passwod
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Resetpassword;
