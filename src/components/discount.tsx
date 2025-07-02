import copy from "copy-to-clipboard";
import { useState } from "react";

const Discount = () => {
  const textToCopy = "FAMILY";
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    copy(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="w-[100%] md:w-[80%] xl:w-[45%] mx-auto py-6 px-6 md:py-10  md:rounded-3xl mb-16 shadow-lg bg-[#79ADDB]">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-[#fff] mb-10">
          15% Off Your First Purchase!
        </h1>
      
        <div className="flex flex-col items-center gap-1 md:mb-6 lg:mb-2 relative">
          <span
            className={`absolute bottom-full mb-2 text-sm px-3 py-1 rounded bg-green-600 text-white shadow transition-all duration-500 ease-in-out ${
              copied
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            Copied to clipboard!
          </span>

          <button
            onClick={handleCopyClick}
            className="w-48 xl:w-60 py-3 bg-[#212529] text-white font-bold rounded-md text-lg xl:text-xl hover:bg-[#343a40] transition flex flex-col leading-tight"
          >
            FAMILY
            
          </button>

          <p className="text-white text-sm italic mt-2">
            Use this code at checkout <br />
            (Click to copy)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Discount;
