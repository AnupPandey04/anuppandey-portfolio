import React, { useEffect, useState } from "react";
import { FaCode, FaFire, FaTrophy } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiCodeforces, SiHackerrank } from "react-icons/si";

// 🔥 Counter Hook
const useCountUp = (end, duration = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
};

const Achievements = () => {
  const problems = useCountUp(460);
  const activeDays = useCountUp(160);
  const rating = useCountUp(1511);
  const streak = useCountUp(40);

  const stats = [
    { label: "Problems Solved (across platforms)", value: problems + "+", icon: <FaCode /> },
    { label: "Active Days", value: activeDays + "+", icon: <FaFire /> },
    { label: "Contest Rating on LeetCode", value: rating, icon: <FaTrophy /> },
    { label: "Max Streak on LeetCode", value: streak, icon: <FaFire /> },
  ];

  const badges = [
    { name: "Python", img: "/badges/python.png" },
    { name: "Java", img: "/badges/java.png" },
    { name: "C++", img: "/badges/cpp.png" },
    { name: "50 Days Badge 2026", img: "/badges/50.gif" },
    { name: "Problem Solving", img: "/badges/problem-solving.png" },
    { name: "C", img: "/badges/c.png" },
    { name: "JavaScript", img: "/badges/js.png" },
    { name: "50 Days Badge 2025", img: "/badges/50-2025.gif" },
    { name: "Introduction to Pandas", img: "/badges/pandas.gif" },
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-[7vw] lg:px-[20vw] text-white"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">ACHIEVEMENTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4">
          A snapshot of my coding journey, achievements, and consistency across platforms
        </p>
      </div>

      {/* 🔥 Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 text-center 
            hover:scale-105 transition duration-300 
            shadow-[0_0_20px_rgba(130,69,236,0.3)]"
          >
            <div className="text-3xl text-purple-500 mb-2 flex justify-center">
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold">{stat.value}</h3>
            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* 🌐 Platforms */}
      <div className="flex justify-center gap-8 text-4xl mb-12 text-gray-400">
        <a
          href="https://leetcode.com/u/AnupOptimized/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-500 transform hover:scale-125 transition"
        >
          <SiLeetcode />
        </a>

        <a
          href="https://www.geeksforgeeks.org/profile/anupcodes"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-500 transform hover:scale-125 transition"
        >
          <SiGeeksforgeeks />
        </a>

        <a
          href="https://codeforces.com/profile/ansh47822"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transform hover:scale-125 transition"
        >
          <SiCodeforces />
        </a>

        <a
          href="https://www.hackerrank.com/profile/ansh47822"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transform hover:scale-125 transition"
        >
          <SiHackerrank />
        </a>
      </div>

      {/* 🏆 Badges */}
      <div className="flex flex-wrap justify-center gap-6">
        {badges.map((badge, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-700 rounded-xl p-4 text-center 
            hover:scale-110 transition duration-300 
            shadow-[0_0_15px_rgba(130,69,236,0.4)]"
          >
            <img
              src={badge.img}
              alt={badge.name}
              className="w-16 h-16 object-contain mx-auto"
            />
            <p className="text-xs mt-2 text-gray-300">{badge.name}</p>
          </div>
        ))}
      </div>

      {/* ✨ Summary */}
      <div className="text-center mt-12 text-gray-400 max-w-2xl mx-auto">
        <p>
          Solved <span className="text-white font-semibold">460+ problems</span> across platforms, 
          maintained <span className="text-white font-semibold">160+ active coding days</span>, 
          and earned <span className="text-white font-semibold">5★ Gold Badges</span> in  
          <span className="text-white font-semibold"> C++, Python, and Java</span> on HackerRank,
        along with top badges on LeetCode.
        </p>
      </div>
    </section>
  );
};

export default Achievements;