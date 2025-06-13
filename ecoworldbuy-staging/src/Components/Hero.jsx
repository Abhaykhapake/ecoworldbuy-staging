import "../index.css";

const Hero = () => (
  <div
    className="
      relative flex flex-col items-center justify-center min-h-[80vh] px-4 py-20 text-center overflow-hidden
      bg-[url('/background.jpg')] bg-cover bg-center
      font-montserrat
    "
  >
    <div className="bg-white/80 rounded-xl shadow-2xl px-8 py-12 max-w-2xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-[#388E3C] mb-4 drop-shadow">
        Live Green. Shop Smart.
      </h1>
      <p className="font-roboto max-w-xl mx-auto text-lg md:text-xl text-gray-700 mb-8 drop-shadow">
        Discover planet-positive products hand-picked for a sustainable
        lifestyle.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          className="
    px-8 py-3 rounded-full font-semibold
    border border-[#4CAF50] text-[#4CAF50] bg-transparent
    hover:bg-[#4CAF50] hover:text-white
    transform transition-transform duration-300 ease-in-out
    hover:-translate-y-0.5
  "
        >
          Start Shopping
        </button>
        <button
          className="
            px-8 py-3 rounded-full font-semibold
            border border-[#4CAF50] text-[#4CAF50] bg-transparent
            hover:bg-[#4CAF50] hover:text-white  transform transition-transform duration-300 ease-in-out
    hover:-translate-y-0.5
          "
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default Hero;
