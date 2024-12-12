import React from "react";

const Card14 = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] w-full bg-gray-200">
      <div className="bg-white relative flex max-w-[500px] w-full flex-col rounded-[10px] border-[1px] border-gray-200 bg-white bg-clip-border shadow-md dark:border-[#ffffff33] dark:!bg-navy-800 dark:text-white dark:shadow-none">
        <div className="!z-5 relative flex h-full w-full flex-col rounded-[20px] bg-white bg-clip-border p-4  dark:!bg-navy-800 dark:text-white dark:shadow-none">
          <div className="mb-8 w-full">
            <h4 className="text-xl font-bold text-navy-700 dark:text-white">
              All projects
            </h4>
            <p className="mt-2 text-base text-gray-600">
              Here you can find more details about your projects. Keep you user
              engaged by providing meaningful information.
            </p>
          </div>
          <div className="flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl 500 dark:!bg-navy-700 dark:shadow-none">
            <div className="flex items-center">
              <div className="">
                <img
                  className="h-[83px] w-[83px] rounded-lg object-cover"
                  src="https://www.eurotechconseil.com/wp-content/uploads/2022/02/article-php.webp"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  Task Tracker Project
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Project #1 .
                  <a
                    className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white hover:text-blue-500 hover:underline"
                    href=" "
                  >
                    See details
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <div className="flex items-center">
              <div className="">
                <img
                  className="h-[83px] w-[83px] rounded-lg object-cover"
                  src="https://www.eurotechconseil.com/wp-content/uploads/2022/02/article-php.webp"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  Detect Internet Speed Test
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Project #2 .
                  <a
                    className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white hover:text-blue-500 hover:underline"
                    href=" "
                  >
                    See details
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-3 flex w-full items-center justify-between rounded-2xl bg-white p-3 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
            <div className="flex items-center">
              <div className="">
                <img
                  className="h-[83px] w-[83px] rounded-lg object-cover"
                  src="https://www.eurotechconseil.com/wp-content/uploads/2022/02/article-php.webp"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  AI Image Generator Website
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Project #3 .
                  <a
                    className="ml-1 font-medium text-brand-500 hover:text-brand-500 dark:text-white hover:text-blue-500 hover:underline"
                    href=" "
                  >
                    See details
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card14;
