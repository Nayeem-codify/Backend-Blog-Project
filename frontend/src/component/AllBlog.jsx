import React, { useEffect, useState } from "react";
import axios from "axios";

const AllBlog = ({observerState}) => {
  const [allBlog, setAllblog] = useState([]);
  useEffect(() => {
    async function getAllUser() {
      try {
        const allBlog = await axios.get("http://localhost:4000/getallblog");
        setAllblog(allBlog.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllUser()
  }, [observerState]);
  return (
    
    <ul className="w-[40vw] divide-y divide-gray-200 bg-red-100 h-(80vh) p-10 overflow-y-scroll shadow-xl">
      {allBlog?.map((item) => {
        <li className="py-10">
          <div className="flex  flex-col items-start">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                (item.userName)
              </p>
              <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                (item.email)
              </p>
            </div>
            <blockquote className="text-xl italic font-semibold text-gray-900">
              <p>
                (item.blog ? item.blog : "Loren text")
              </p>
            </blockquote>
          </div>
          <div className="flex mt-10">
            <button
              type="button"
              className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Edit
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
            >
              Delete
            </button>
          </div>
        </li>;
      })}
    </ul>

  )
}
export default AllBlog;
