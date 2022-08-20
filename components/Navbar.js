import React from "react";
import { useRecoilState } from "recoil";
import { loginState, signupState } from "../atoms/signAtoms";

const Navbar = () => {
  const [login, setLogin] = useRecoilState(loginState);
  const [signup, setSignup] = useRecoilState(signupState);
  return (
    <div>
      <div className="px-10 flex items-center justify-between py-3 bg-slate-50">
        <div className="text-2xl">
          <span className="text-[#27A365]">ATG</span>
          <span>.W</span>
          <img src="union.svg" width={18} alt="" className="inline" />
          <span>RLD</span>
        </div>
        <div>
          <button
            onClick={() => {
              setLogin(true);
            }}
            className="text-lg font-semibold mr-8 hover:underline"
          >
            Login
          </button>
          <button
            onClick={() => {
              setSignup(true);
            }}
            data-modal-toggle="defaultModal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-base px-6 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
