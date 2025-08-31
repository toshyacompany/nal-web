import React from "react";

const FreeQuote: React.FC = () => {
  return (
    <section className="w-full bg-[#ff9934] py-14 mobile:py-8">
      <div className="container px-6 mx-auto mobile:px-4">
        <div className="flex items-center justify-between gap-8 mobile:flex-col mobile:items-start">
          <div className="max-w-lg text-white">
            <h3 className="text-4xl font-extrabold mobile:text-2xl">
              Get Free Quote
            </h3>
            <p className="mt-3 text-sm mobile:text-sm">
              Perfect Solution For Your Company.
            </p>
          </div>

          <form className="flex items-center gap-4 mobile:flex-col mobile:items-stretch mobile:w-full">
            <input
              type="text"
              placeholder="Full Name"
              className="w-64 h-12 px-4 placeholder-gray-500 bg-white rounded shadow-sm outline-none mobile:w-full mobile:h-12"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-64 h-12 px-4 placeholder-gray-500 bg-white rounded shadow-sm outline-none mobile:w-full mobile:h-12"
            />

            <button
              type="submit"
              className="h-12 px-6 font-semibold text-white bg-[#111111] rounded shadow-md mobile:w-full mobile:px-4 mobile:py-3"
            >
              GET QUOTE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FreeQuote;
