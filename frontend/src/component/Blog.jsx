import React, { useState } from "react";
import axios from "axios";

const Blog = () => {
  const [bloginput, setbloginput] = useState({
    username: "",
    email: "",
    password: "",
    blog: "",
  });

  const blogHanlader = (event) => {
    const { id, value } = event.target;
    setbloginput({
      ...bloginput,
      [id]: value,
    });
  };

  //HandleBlogPost//
  const handleBlogPost = async () => {
    console.log(bloginput);
    
    try {
      const { username, email, blog, password } = bloginput;
      if ((!username || !email, !blog, !password)) {
        return;
      }
      await axios.post(
        "http://localhost:4000/createblog",
        {
          userName: username,
          email: email,
          password: password,
          blog: blog,
        },
        {
          "Content-Type": "application/json",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
     <form className="max-w-sm">
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            UserName
          </label>
          <input
            type="username"
            id="username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Name"
            required
            onChange={blogHanlader}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
            onChange={blogHanlader}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Password"
            required
            onChange={blogHanlader}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="blog"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Blog
          </label>
          <textarea
            type="blog"
            id="blog"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Blog"
            required
            onChange={blogHanlader}
          />
        </div>

        <button
          onClick={handleBlogPost}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit Blog
        </button>
        </form>
    </>
  );
};

export default Blog;
