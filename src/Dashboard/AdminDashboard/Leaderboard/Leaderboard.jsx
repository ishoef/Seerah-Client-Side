import React, { useState } from "react";
import PositionCard from "./PositionCard/PositionCard";
import Pagination from "../../../Components/Pagination/Pagination";

export default function Leaderboard() {
  // Generate additional leaderboard data dynamically
  const leaderboardData = [];

  // Existing first 25 entries (you can keep your original ones)
  const initialData = [
    /* your original 25 entries here */
  ];

  // Push initial data first
  leaderboardData.push(...initialData);

  // Generate 1 to 50
  for (let i = 1; i <= 500; i++) {
    const quizNo = Math.floor(Math.random() * 5) + 5; // quiz 5-9
    const avgMarks = (Math.random() * 5 + 55).toFixed(2); // marks 55-60
    const students = Math.floor(Math.random() * 50) + 5; // 5-55 students
    const topStudentsCount = Math.floor(Math.random() * 5) + 1; // 1-5 top students

    const topStudents = Array.from({ length: topStudentsCount }, () => {
      const gender = Math.random() > 0.5 ? "men" : "women";
      const id = Math.floor(Math.random() * 100);
      return `https://randomuser.me/api/portraits/${gender}/${id}.jpg`;
    });

    leaderboardData.push({
      rank: i,
      quizNo,
      avgMarks: parseFloat(avgMarks),
      students,
      topStudents,
    });
  }

  console.log(leaderboardData); // Now you have 50 entries

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(leaderboardData.length / itemsPerPage);
  const currentData = leaderboardData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d0f1a] text-gray-900 dark:text-white px-6 pb-10 pt-2 rounded-2xl transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Top Card */}
        <PositionCard />

        {/* Table Card */}
        <div className="bg-gray-100 dark:bg-[#141827] rounded-2xl shadow-xl mt-6 overflow-hidden transition-colors duration-300">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-200 dark:bg-[#1d2235] text-gray-900 dark:text-gray-300 uppercase">
                <tr>
                  <th className="px-6 py-4">Rank</th>
                  <th className="px-6 py-4">Assignment No</th>
                  <th className="px-6 py-4">Assignment Avg. Marks</th>
                  <th className="px-6 py-4">Students</th>
                  <th className="px-6 py-4">Top 5 Students</th>
                  <th className="px-6 py-4">Details</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((row) => (
                  <tr
                    key={row.rank}
                    className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-[#1a1f2e] transition-colors duration-300"
                  >
                    {/* Rank */}
                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      Rank {row.rank.toString().padStart(2, "0")}
                    </td>

                    {/* Assignment No */}
                    <td className="px-6 py-4">{row.quizNo}</td>

                    {/* Avg Marks */}
                    <td className="px-6 py-4">{row.avgMarks}</td>

                    {/* Students */}
                    <td className="px-6 py-4">{row.students}</td>

                    {/* Top Students */}
                    <td className="px-6 py-4">
                      <div className="flex -space-x-3">
                        {row.topStudents.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt="student"
                            className="w-9 h-9 rounded-full border-2 border-gray-100 dark:border-[#141827]"
                          />
                        ))}
                      </div>
                    </td>

                    {/* Info Button */}
                    <td className="px-6 py-4">
                      <button className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-500 dark:hover:text-indigo-300 transition-colors duration-300">
                        Info
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}
