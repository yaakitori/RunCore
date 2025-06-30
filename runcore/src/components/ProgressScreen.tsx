
import { FaArrowLeft, FaHome, FaChartLine, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

const ProgressScreen = () => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0] font-sans flex flex-col min-h-screen p-5 box-border">
      <header className="flex justify-between items-center text-white font-semibold mb-5">
        <FaArrowLeft className="text-xl" />
        <h2 className="text-lg">Progress</h2>
        <span />
      </header>

      <main className="flex-grow pb-20">
        <section className="mb-5">
          <h3 className="text-white text-xl font-semibold mt-5 mb-4">Weekly Progress</h3>
          <div className="bg-[#1C1C1E] p-5 rounded-xl">
            <span className="text-base text-gray-400">Distance</span>
            <strong className="block text-4xl text-white font-bold my-1">25 km</strong>
            <span className="text-base font-medium text-green-500">This Week +10%</span>
            <div className="flex justify-between items-end h-40 mt-8">
              <div className="flex flex-col items-center w-[12%]">
                <div className="w-full bg-gray-600 rounded-md" style={{ height: '60%' }}></div>
                <span className="mt-2 text-sm text-gray-400">Mon</span>
              </div>
              <div className="flex flex-col items-center w-[12%]">
                <div className="w-full bg-gray-600 rounded-md" style={{ height: '80%' }}></div>
                <span className="mt-2 text-sm text-gray-400">Tue</span>
              </div>
              <div className="flex flex-col items-center w-[12%]">
                <div className="w-full bg-gray-600 rounded-md" style={{ height: '40%' }}></div>
                <span className="mt-2 text-sm text-gray-400">Wed</span>
              </div>
              <div className="flex flex-col items-center w-[12%]">
                <div className="w-full bg-gray-600 rounded-md" style={{ height: '70%' }}></div>
                <span className="mt-2 text-sm text-gray-400">Thu</span>
              </div>
              <div className="flex flex-col items-center w-[12%]">
                <div className="w-full bg-gray-600 rounded-md" style={{ height: '90%' }}></div>
                <span className="mt-2 text-sm text-gray-400">Fri</span>
              </div>
              <div className="flex flex-col items-center w-[12%]">
                <div className="w-full bg-gray-600 rounded-md" style={{ height: '50%' }}></div>
                <span className="mt-2 text-sm text-gray-400">Sat</span>
              </div>
              <div className="flex flex-col items-center w-[12%]">
                <div className="w-full bg-gray-600 rounded-md" style={{ height: '30%' }}></div>
                <span className="mt-2 text-sm text-gray-400">Sun</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-white text-xl font-semibold mt-5 mb-4">Monthly Progress</h3>
          <div className="bg-[#1C1C1E] p-5 rounded-xl">
            <span className="text-base text-gray-400">Total Distance</span>
            <strong className="block text-4xl text-white font-bold my-1">100 km</strong>
            <span className="text-base font-medium text-green-500">This Month +5%</span>
            <div className="h-48 border border-dashed border-gray-600 rounded-lg mt-5"></div>
          </div>
        </section>
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-[#1F1F1F] flex justify-around py-5 border-t border-gray-700">
        <a href="#" className="text-gray-400 text-2xl">
          <FaHome />
        </a>
        <a href="#" className="text-white text-2xl">
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

export default ProgressScreen;
