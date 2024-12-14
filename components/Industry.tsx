import React from "react";

const industries = [
  { name: "1XBET", logo: "/assets/1xbet.svg" },
  { name: "1XBET", logo: "/assets/1xbet.svg" },
  { name: "payncenter", logo: "/assets/payncentre.svg" },
  { name: "1XBET", logo: "/assets/1xbet.svg" },
];

const Industry: React.FC = () => {
  return (
    <div className="bg-gray-50 py-8 px-4 border-gray-300">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
        Industries We Support
      </h2>
      <div className="flex flex-col items-center">
        <div className="bg-[#d0e2f7] shadow-lg rounded-xl flex items-center justify-center py-10 px-4 md:py-14 md:px-6 relative w-full max-w-6xl">
          {/* Left Navigation Button */}
          <button className="p-4 bg-white rounded-full shadow hover:bg-gray-200 absolute left-2 md:left-0 transform -translate-x-2 md:-translate-x-8 flex items-center">
            &#8249;
          </button>

          {/* Industry Logos */}
          <div className="flex items-center justify-center space-x-4 md:space-x-6 overflow-x-auto scrollbar-hide">
            <div className="flex-shrink-0 w-36 h-20 md:w-48 md:h-24 flex items-center justify-center">
              <img src="/assets/1xbet.svg" alt="1XBET" className="h-12 md:h-16 w-auto" />
            </div>
            {industries.slice(1, industries.length - 1).map((industry, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-36 h-20 md:w-48 md:h-24 flex items-center justify-center"
              >
                <img src={industry.logo} alt={industry.name} className="h-12 md:h-16 w-auto" />
              </div>
            ))}
            <div className="flex-shrink-0 w-36 h-20 md:w-48 md:h-24 flex items-center justify-center">
              <img src="/assets/1xbet.svg" alt="1XBET" className="h-12 md:h-16 w-auto" />
            </div>
          </div>

          {/* Right Navigation Button */}
          <button className="p-4 bg-white rounded-full shadow hover:bg-gray-200 absolute right-2 md:right-0 transform translate-x-2 md:translate-x-8 flex items-center">
            &#8250;
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex flex-col items-center mt-6 w-full max-w-6xl">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gray-300 rounded-full"
              ></div>
            ))}
          </div>
          <div className="mt-4 border-b-2 border-gray-300 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
