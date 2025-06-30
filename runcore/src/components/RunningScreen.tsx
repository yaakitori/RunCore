import { FaPause, FaHome, FaChartLine, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const RunningScreen = () => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] font-sans flex flex-col min-h-screen">
      <div className="flex flex-col flex-grow p-5">
        <header className="flex justify-end text-2xl">
          <FaPause />
        </header>

        <main className="flex-grow flex flex-col justify-center items-center text-center">
          <div className="text-6xl text-white font-bold my-10">
            00:00:00
          </div>

          <section className="w-full max-w-md">
            <hr className="border-none border-t border-gray-700 my-5" />
            <div className="flex justify-around my-5">
              <div className="flex flex-col items-center">
                <span className="text-base text-gray-400 mb-2">Distance</span>
                <span className="text-2xl text-[#E0E0E0] font-medium">0.00 km</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-base text-gray-400 mb-2">Time</span>
                <span className="text-2xl text-[#E0E0E0] font-medium">00:00:00</span>
              </div>
            </div>
            <hr className="border-none border-t border-gray-700 my-5" />
            <div className="flex justify-around my-5">
              <div className="flex flex-col items-center">
                <span className="text-base text-gray-400 mb-2">Average Pace</span>
                <span className="text-2xl text-[#E0E0E0] font-medium">00:00 /km</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-base text-gray-400 mb-2">Instant Pace</span>
                <span className="text-2xl text-[#E0E0E0] font-medium">00:00 /km</span>
              </div>
            </div>
            <hr className="border-none border-t border-gray-700 my-5" />
            <div className="flex justify-center my-5">
              <div className="flex flex-col items-center">
                <span className="text-base text-gray-400 mb-2">Calories</span>
                <span className="text-2xl text-[#E0E0E0] font-medium">0 kcal</span>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="fixed bottom-0 left-0 w-full bg-[#1F1F1F] flex justify-around py-5 border-t border-gray-700">
        <a href="#" className="text-white text-2xl">
          <FaHome />
        </a>
        <a href="#" className="text-gray-400 text-2xl">
          <FaChartLine />
        </a>
        <a href="#" className="text-gray-400 text-2xl">
          <FaMapMarkerAlt />
        </a>
        <a href="#" className="text-gray-400 text-2xl">
          <FaUser />
        </a>
      </footer>
    </div>
  );
};

export default RunningScreen;