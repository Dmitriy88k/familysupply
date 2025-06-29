const Discount = () => {
  return (
    <div className="w-[100%] md:w-[80%] xl:w-[45%] mx-auto py-6 px-6 md:py-10  md:rounded-3xl mb-16 shadow-lg bg-[#79ADDB]">
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold text-[#fff] mb-10">
          15% Off Your First Purchase!
        </h1>

        {/* Aligned vertically with same width */}
        <div className="flex flex-col items-center gap-1 md:mb-6 lg:mb-2">
          <span className="w-40 bg-[#212529] text-[#fff] font-bold px-3 py-2 rounded-md tracking-widest text-center shadow-sm text-sm md:text-md xl:text-lg">
            FAMILY
          </span>
          <p className="text-[#fff] text-sm italic">Use this code at checkout</p>
        </div>
        
      </div>
    </div>
  );
};

export default Discount;
