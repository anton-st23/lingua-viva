"use client";

import { useState } from "react";
import Image from "next/image";
import languagesData from "../data/languages.json";

export default function LanguageGallery() {
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredByStatus = selectedStatus === "All" 
    ? languagesData 
    : languagesData.filter(lang => lang.status === selectedStatus);

  const displayedLanguages = filteredByStatus.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="px-8 py-12 bg-white rounded-3xl shadow-xl space-y-8">
      <h2 className="text-4xl font-bold text-indigo-700 text-center mb-8">
        Languages Gallery
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
  <input
    type="text"
    placeholder="🔍 Search languages..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    className="p-3 md:p-4 rounded-xl border-2 border-indigo-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 w-full md:w-1/2 shadow-md text-lg"
  />

  <select
    value={selectedStatus}
    onChange={(e) => setSelectedStatus(e.target.value)}
    className="p-3 md:p-4 rounded-xl border-2 border-indigo-400 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-300 w-full md:w-1/3 shadow-md text-lg bg-white"
  >
    <option value="All">🌐 All Statuses</option>
    <option value="Critically Endangered">Critically Endangered</option>
    <option value="Severely Endangered">Severely Endangered</option>
    <option value="Vulnerable">Vulnerable</option>
    <option value="Revived">Revived</option>
    <option value="Safe (Official in many countries)">Safe</option>
    <option value="Definitely Endangered">Definitely Endangered</option>
    <option value="Extinct">Extinct</option>
  </select>
</div>


      {/* Сетка языков */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayedLanguages.map((lang) => (
          <div
            key={lang.slug}
            className="bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 rounded-2xl p-4 shadow-lg cursor-pointer hover:scale-105 transform transition"
          >
            <div className="h-32 w-full mb-4 relative">
              <Image
                src={`/languages/${lang.slug}.jpg`}
                alt={lang.name}
                fill
                className="object-cover rounded-xl"
                onError={(e) => { e.target.src="/icons/lingualogo.jpg"; }}
              />
            </div>
            <h3 className="text-xl font-semibold text-indigo-700">{lang.name}</h3>
            <p className="text-gray-700 text-sm mt-1">{lang.region}</p>

            {/* Индикатор количества говорящих */}
            <p className="text-sm text-gray-600 mt-2">
              Speakers: {lang.speakers.toLocaleString()}
            </p>
            <div className="h-2 w-full bg-gray-200 rounded-full mt-1">
              <div
                className="h-2 bg-indigo-600 rounded-full"
                style={{ width: `${Math.min(100, Math.log(lang.speakers)/10 * 10)}%` }}
              ></div>
            </div>

            <p className="text-gray-500 text-xs mt-2 italic">{lang.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
