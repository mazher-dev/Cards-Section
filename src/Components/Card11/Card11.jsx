import React, { useState, useEffect, useRef } from 'react';

const Card11 = () => {
  const [showAlert, setShowAlert] = useState(true);
  const firstButtonRef = useRef(null);

  useEffect(() => {
    if (showAlert) {
      firstButtonRef.current?.focus();
    }
  }, [showAlert]);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-8 md:px-12 lg:px-32 py-24 flex flex-col justify-center h-screen">
        {showAlert && (
          <div
            role="dialog"
            aria-labelledby="cookieBannerTitle"
            aria-describedby="cookieBannerDesc"
          >
            <div className="mx-auto p-8 lg:p-10 bg-white rounded-3xl ring-1 ring-gray-200 ring-inset shadow-2xl max-w-lg text-center">
              <img
                src="https://i.pinimg.com/originals/ef/86/cf/ef86cfbac3952cbfdaacb66e8ca3b685.gif"
                alt="Cookies"
                className="w-32 h-32 mx-auto rounded-full -mt-24"
              />
              <h2 id="cookieBannerTitle" className="text-2xl font-medium mt-8">
                Our website uses cookies
              </h2>
              <p id="cookieBannerDesc" className="mt-4 text-gray-500">
                Our website uses cookies. By continuing, we assume your permission
                to deploy cookies as detailed in our
                <a
                  href="#_"
                  className="underline hover:text-orange-600 text-black"
                >
                  Privacy Policy.
                </a>
              </p>
              <div className="mt-8">
                <button
                  ref={firstButtonRef}
                  onClick={() => setShowAlert(false)}
                  className="rounded-full bg-orange-600 px-8 py-2 h-12 text-sm font-semibold text-white hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                >
                  Accept all cookies
                </button>
              </div>
              <div className="mt-4">
                <a href="#_" className="text-sm text-orange-600 hover:text-orange-500">
                  Manage cookies
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      
    </section>
  );
};

export default Card11;
