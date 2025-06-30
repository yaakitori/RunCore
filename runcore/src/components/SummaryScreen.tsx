
import { FaTimes, FaHome, FaChartLine, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const SummaryScreen = () => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] font-sans flex flex-col min-h-screen">
      <header className="flex justify-between items-center text-white font-semibold p-5">
        <FaTimes className="text-2xl" />
        <h2 className="text-lg">Run</h2>
        <span />
      </header>

      <main className="flex-grow">
        <div className="h-[300px] bg-[#4DB6AC]" />

        <section className="p-5">
          <h2 className="text-white font-semibold text-xl mt-0 mb-5">Summary</h2>
          <ul className="list-none p-0 m-0">
            <li className="flex justify-between items-center text-lg py-4 border-b border-gray-700">
              <span className="text-gray-400">Distance</span>
              <strong className="text-white font-medium">5.2 km</strong>
            </li>
            <li className="flex justify-between items-center text-lg py-4 border-b border-gray-700">
              <span className="text-gray-400">Duration</span>
              <strong className="text-white font-medium">28:31</strong>
            </li>
            <li className="flex justify-between items-center text-lg py-4 border-b border-gray-700">
              <span className="text-gray-400">Avg Pace</span>
              <strong className="text-white font-medium">5:29 /km</strong>
            </li>
            <li className="flex justify-between items-center text-lg py-4">
              <span className="text-gray-400">Elevation</span>
              <strong className="text-white font-medium">45 m</strong>
            </li>
          </ul>
        </section>
      </main>

      <footer className="sticky bottom-0 bg-[#1F1F1F] flex justify-around py-5 border-t border-gray-700">
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

export default SummaryScreen;
