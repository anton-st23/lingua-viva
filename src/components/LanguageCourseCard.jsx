import React from "react";
import { FaStar } from "react-icons/fa";

export default function LanguageCourseCard({ name, description, rating, image, onEnroll }) {
  return (
    <div className="rounded-xl shadow-lg border p-4 w-72 bg-white hover:shadow-xl transition">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <h2 className="text-xl font-bold mb-1">{name}</h2>

      <div className="flex items-center mb-2">
        <FaStar className="text-yellow-500 mr-1" />
        <span className="text-gray-700 font-medium">{rating.toFixed(1)}</span>
      </div>

      <p className="text-gray-600 text-sm mb-3">{description}</p>

      <button
        onClick={onEnroll}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
      >
        Записаться
      </button>
    </div>
  );
}
