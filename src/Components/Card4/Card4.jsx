import React from "react";

const Card4 = () => {
  return (
    <>
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        rel="stylesheet"
      />
      <div className="antialiased text-gray-900 ">
        <div className="bg-gray-200 min-h-screen p-8 flex items-center justify-center">
          <div className="bg-white rounded-lg overflow-hidden shadow-2xl xl:w-1/5 lg:w-1/4 md:w-1/3 sm:w-1/2">
            {/*E11*/}
            {/* <div class="h-48 bg-cover bg-center" style="background-image:url('https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80')"></div>*/}
            <img
              className="h-48 w-full object-cover object-end"
              src="https://images.unsplash.com/photo-1570797197190-8e003a00c846?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=968&q=80"
              alt="Home in Countryside"
            />
            <div className="p-6">
              <div className="flex items-baseline">
                <span className="inline-block bg-teal-200 text-teal-800 py-1 px-4 text-xs rounded-full uppercase font-semibold tracking-wide">
                  New
                </span>
                <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                  3 beds • 2 baths
                </div>
              </div>
              <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                Beautiful Home in the countryside
              </h4>
              <div className="mt-1">
                <span>$1,900.00</span>
                <span className="text-gray-600 text-sm">/ wk</span>
              </div>
              <div className="mt-2 flex items-center">
                <span className="text-teal-600 font-semibold">
                  <span>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="far fa-star" />
                    <span></span>
                    <span className="ml-2 text-gray-600 text-sm">
                      34 reviews
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card4;
