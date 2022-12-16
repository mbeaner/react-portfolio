import React from 'react';
import WorkImg from '../assets/projects/workImg.jpeg';
import realEstateImg from '../assets/projects/realestate.jpg';
import note from '../assets/projects/note-traker.jpg';
import weBoot from '../assets/projects/weBoot.jpg';
import hooked from '../assets/projects/hooked.jpg';
import eatYourFeelings from '../assets/projects/eatYourFeeling.jpg';
import mvcTechBlog from '../assets/projects/mvcTechBlog.jpg';
import weatherDashboard from '../assets/projects/weatherDashboard.jpg';
import dayPlanner from '../assets/projects/dayPlanner.jpg';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600 ">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${weBoot})` }}
            className="shadow-lg showdow-[#040c16] group container rounded-md flex justify-center items-center mx-aut content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                eCommerce Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://shrouded-sierra-58788.herokuapp.com/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mbeaner/weBoot-2" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${hooked})` }}
            className="shadow-lg showdow-[#040c16] group container rounded-md flex justify-center items-center mx-aut content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MVC Dating Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://limitless-lake-53340.herokuapp.com/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mbeaner/Hooked" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${eatYourFeelings})` }}
            className="shadow-lg showdow-[#040c16] group container rounded-md flex justify-center items-center mx-aut content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Meal Generator Web Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://mbeaner.github.io/eatYourFealings/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/mbeaner/eatYourFealings"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${mvcTechBlog})` }}
            className="shadow-lg showdow-[#040c16] group container rounded-md flex justify-center items-center mx-aut content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MVC Tech Blog Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://murmuring-mountain-69522.herokuapp.com/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/mbeaner/mvc-tech-blog"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${weatherDashboard})` }}
            className="shadow-lg showdow-[#040c16] group container rounded-md flex justify-center items-center mx-aut content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather Application
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://mbeaner.github.io/weather-dashboard/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/mbeaner/weather-dashboard"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${dayPlanner})` }}
            className="shadow-lg showdow-[#040c16] group container rounded-md flex justify-center items-center mx-aut content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Day Planner Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://mbeaner.github.io/day-planner/" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/mbeaner/day-planner" target="blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
