import React from "react";
import { useRecoilState } from "recoil";
import {
  delePost1State,
  deletePostState,
  editPostState,
  postViewState,
  viewDele1State,
} from "../atoms/signAtoms";
import Deletepost from "../components/Deletepost";

const Viewpost = () => {
  const [delePost1, setDelePost1] = useRecoilState(delePost1State);
  const [viewDele1, setViewDele1] = useRecoilState(viewDele1State);

  return (
    <div>
      {delePost1 ? <Deletepost /> : null}
      <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 md:inset-0 h-modal md:h-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="relative w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <button
              className="absolute right-0 -top-9"
              onClick={() => {
                setViewDele1(false);
              }}
            >
              <img src="/x-icon.svg" alt="" className="" />
            </button>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <p
                    htmlFor="title"
                    className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Title :
                  </p>
                  <p>Noteworthy technology acquisitions 2021</p>
                </div>
                <div>
                  <p
                    htmlFor="title"
                    className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Body :
                  </p>
                  <p>
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </div>
                <div>
                  <p
                    htmlFor="title"
                    className="block mb-2 text-lg font-semibold text-gray-900 dark:text-white"
                  >
                    Tags :
                  </p>
                  <p>#fun #playing</p>
                </div>
                <div className="py-1"></div>
                <div className="space-x-8 text-center mt-10">
                  <button
                    type=""
                    onClick={() => {
                      setViewDele1(false);
                      setEditPost(true);
                    }}
                    className="w-2/5 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Edit
                  </button>
                  <button
                    type=""
                    onClick={() => {
                      setDelePost1(true);
                    }}
                    className="w-2/5 text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                  >
                    Delete
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Viewpost;
