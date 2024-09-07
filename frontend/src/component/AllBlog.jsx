import React from "react";

const AllBlog = () => {
  return (
    <div className=" bg-red-300 h-(90vh) p-10">
      <ul class="max-w-md divide-y divide-gray-200">
        <li class="py-3 sm:py-4">
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <div class="flex-shrink-0"></div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium">Nayeem Islam</p>
              <p class="text-sm truncate">email@flowbite.com</p>
            </div>
            <div class="inline-flex items-center text-base font-semibold">
              $4164
            </div>
          </div>
        </li>
      </ul>

      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0"></div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium">Bonnie Green</p>
            <p class="text-sm truncate">email@flowbite.com</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold">
            $3467
          </div>
        </div>
      </li>
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0"></div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium">Michael Gough</p>
            <p class="text-sm truncate">email@flowbite.com</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold">
            $67
          </div>
        </div>
      </li>
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0"></div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium">Thomas Lean</p>
            <p class="text-sm truncate">email@flowbite.com</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold">
            $2367
          </div>
        </div>
      </li>
      <li class="pt-3 pb-0 sm:pt-4">
        <div class="flex items-center space-x-4 rtl:space-x-reverse">
          <div class="flex-shrink-0"></div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium ">Lana Byrd</p>
            <p class="text-sm truncate ">email@flowbite.com</p>
          </div>
          <div class="inline-flex items-center text-base font-semibold">
            $367
          </div>
        </div>
      </li>
    </div>
  );
};

export default AllBlog;
