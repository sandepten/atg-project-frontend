import React from "react";
import { useRecoilState } from "recoil";
import {
  editedPoststate,
  editPostState,
  writePostState,
} from "../atoms/signAtoms";

const WriteFirstPost = () => {
  const [editPost, setEditPost] = useRecoilState(editPostState);
  const [editedPost, setEditedPost] = useRecoilState(editedPoststate);
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-10 md:inset-0 h-modal md:h-full">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="relative w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <button
              className="absolute right-0 -top-9"
              onClick={() => {
                setEditPost(false);
              }}
            >
              <img src="/x-icon.svg" alt="" className="" />
            </button>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Edit the Post
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    defaultValue="I really love Javascript and react"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Title goes here"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="body"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Body
                  </label>
                  <textarea
                    type="text"
                    rows="10"
                    cols="100"
                    name="body"
                    placeholder="Body goes here"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                    defaultValue="Javascript is really fun to work with and it is really is a really
                    versatile language, its fun to manage both the frontend and the
                    backend ddddd"
                  />
                </div>
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Tags
                  </label>
                  <input
                    type="text"
                    name="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="#fun #coding"
                    defaultValue="#coding #fun"
                  />
                </div>

                <button
                  onClick={() => {
                    setEditPost(false);
                    setEditedPost(true);
                  }}
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WriteFirstPost;
