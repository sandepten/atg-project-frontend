import React from "react";

const Blogitem2 = () => {
  return (
    <div>
      <div>
        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              `It`s Not a Bug, It`s a Feature.` Trite—or Just Right?
            </h5>
          </a>
          <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
            It`s an acknowledgment, half comic, half tragic, of the ambiguity
            that has always haunted computer programming.
          </p>
          <p className="mb-6 font-normal dark:text-gray-400 text-blue-700">
            #think #uncover
          </p>
          <a
            href="#"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              className="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blogitem2;
