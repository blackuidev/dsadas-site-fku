import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-white">
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none"
        >
          <source
            src="https://cdn.pixabay.com/video/2024/04/11/207009-932310129_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 p-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Discover Your Style
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
            Explore our curated collection of premium products designed to elevate your lifestyle.
          </p>
          <Link
            to="/products"
            className="bg-white text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
          >
            Shop Now
          </Link>
        </div>
      </section>
      
      {/* Additional sections can be added here */}
    </div>
  );
};

export default Home;
