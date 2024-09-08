import React from "react";

const AllBlog = () => {
  return (
    <ul class="max-w-md divide-y divide-gray-200 bg-red-100 h-(80vh) p-10 overflow-y-scroll  ">
      <li class="py-10">
        <div class="flex  flex-col items-start">
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">Neil Sims</p>
            <p class="text-sm text-gray-500 truncate dark:text-gray-400">
              email@flowbite.com
            </p>
          </div>
          <blockquote class="text-xl italic font-semibold text-gray-900">
            <p>
              "Flowbite is just awesome. It contains tons of predesigned
              components and pages starting from login screen to complex
              dashboard. Perfect choice for your next SaaS application."
            </p>
          </blockquote>
        </div>
        <div className="flex mt-10">
          <button
            type="button"
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            Edit
          </button>
          <button
            type="button"
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
          >
            Delete
          </button>
        </div>
      </li>
    </ul>
  );
};

export default AllBlog;
