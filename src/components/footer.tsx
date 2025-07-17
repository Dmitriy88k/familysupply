const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white pt-12 pb-6 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FF6F34]">Company</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#FF6F34]">About Us</a></li>
            <li><a href="#" className="hover:text-[#FF6F34]">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#FF6F34]">Careers</a></li>
            <li><a href="#" className="hover:text-[#FF6F34]">Blog</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FF6F34]">Customer Service</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#FF6F34]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#FF6F34]">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-[#FF6F34]">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#FF6F34]">Terms & Conditions</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FF6F34]">Categories</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-[#FF6F34]">Hand Soaps</a></li>
            <li><a href="#" className="hover:text-[#FF6F34]">Surface Cleaners</a></li>
            <li><a href="#" className="hover:text-[#FF6F34]">Laundry Supplies</a></li>
            <li><a href="#" className="hover:text-[#FF6F34]">Paper Products</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#FF6F34]">Get in Touch</h3>
          <p className="mb-2">📍 777 Brooklyn Ave, Brooklyn, NY</p>
          <p className="mb-2">📞 (718) 777-7777</p>
          <p className="mb-4">✉️ support@familysupply.com</p>
          <div className="flex gap-4 text-xl">
            <a href="#"><i className="fab fa-facebook hover:text-[#FF6F34]"></i></a>
            <a href="#"><i className="fab fa-twitter hover:text-[#FF6F34]"></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-[#FF6F34]"></i></a>
            <a href="#"><i className="fab fa-youtube hover:text-[#FF6F34]"></i></a>
            <a href="#"><i className="fab fa-linkedin hover:text-[#FF6F34]"></i></a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} Family Supply. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
