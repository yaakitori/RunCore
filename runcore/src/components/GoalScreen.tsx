
import { FaTimes } from 'react-icons/fa';
import styles from './GoalScreen.module.css';

const GoalScreen = () => {
  return (
    <div className="bg-[#1C1C1E] text-[#E0E0E0] font-sans min-h-screen flex flex-col p-5 box-border">
      <header className="flex justify-between items-center text-white font-semibold mb-8">
        <FaTimes className="text-2xl" />
        <h2 className="text-lg">Set a goal</h2>
        <span />
      </header>

      <main className="flex-grow">
        <h1 className="text-white font-semibold text-3xl text-center mb-10">
          What&apos;s your goal?
        </h1>
        <ul className="list-none p-0 m-0">
          <li className="mb-4">
            <label
              htmlFor="marathon"
              className="flex justify-between items-center p-5 border border-gray-700 rounded-lg cursor-pointer"
            >
              <span>Run a marathon</span>
              <input
                type="radio"
                id="marathon"
                name="goal"
                value="marathon"
                className={styles.radioInput}
                defaultChecked
              />
              <span className={styles.radioCustom}></span>
            </label>
          </li>
          <li className="mb-4">
            <label
              htmlFor="half-marathon"
              className="flex justify-between items-center p-5 border border-gray-700 rounded-lg cursor-pointer"
            >
              <span>Run a half marathon</span>
              <input
                type="radio"
                id="half-marathon"
                name="goal"
                value="half-marathon"
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
            </label>
          </li>
          <li className="mb-4">
            <label
              htmlFor="10k"
              className="flex justify-between items-center p-5 border border-gray-700 rounded-lg cursor-pointer"
            >
              <span>Run a 10K</span>
              <input
                type="radio"
                id="10k"
                name="goal"
                value="10k"
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
            </label>
          </li>
          <li className="mb-4">
            <label
              htmlFor="5k"
              className="flex justify-between items-center p-5 border border-gray-700 rounded-lg cursor-pointer"
            >
              <span>Run a 5K</span>
              <input
                type="radio"
                id="5k"
                name="goal"
                value="5k"
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
            </label>
          </li>
          <li className="mb-4">
            <label
              htmlFor="distance"
              className="flex justify-between items-center p-5 border border-gray-700 rounded-lg cursor-pointer"
            >
              <span>Run a specific distance</span>
              <input
                type="radio"
                id="distance"
                name="goal"
                value="distance"
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
            </label>
          </li>
          <li>
            <label
              htmlFor="time"
              className="flex justify-between items-center p-5 border border-gray-700 rounded-lg cursor-pointer"
            >
              <span>Run for a specific time</span>
              <input
                type="radio"
                id="time"
                name="goal"
                value="time"
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
            </label>
          </li>
        </ul>
      </main>

      <footer className="pt-5">
        <button className="w-full py-4 bg-[#E63946] text-white border-none rounded-lg text-lg font-semibold cursor-pointer">
          Next
        </button>
      </footer>
    </div>
  );
};

export default GoalScreen;
