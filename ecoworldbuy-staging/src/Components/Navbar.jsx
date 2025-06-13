
const Navbar = () => (
  <nav className="bg-white shadow-md">
    <div className="w-full px-8 py-9 flex items-center justify-between font-montserrat">
      <div className="flex items-center space-x-3">
        <img
          src="/sustainability.png"
          alt="EcoWorldBuy Logo"
          className="w-10 h-10"
        />
        <span className="text-4xl font-bold text-[#4CAF50] tracking-wide">
          EcoWorldBuy
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <ul className="flex space-x-10 text-gray-700 font-medium">
          <li>
            <a href="#" className=" hover:text-[#4CAF50] transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4CAF50] transition-colors">
              Shop
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4CAF50] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#4CAF50] transition-colors">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="ml-6 px-5 py-2 border border-[#4CAF50] text-[#4CAF50] rounded-full bg-transparent hover:bg-[#4CAF50] hover:text-white   transform transition-transform duration-300 ease-in-out
    hover:-translate-y-0.5"
        >
          Sign Up
        </button>
      </div>
    </div>
  </nav>
);

export default Navbar;
