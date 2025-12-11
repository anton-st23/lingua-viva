import React, { useState } from "react";
import LanguageCourseCard from "./LanguageCourseCard";
import ModalForm from "./ModalForm";

export default function LanguageCoursesList() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const courses = [
    {
      name: "Ainu",
      rating: 4.8,
      description: "Learn the Ainu language spoken by Indigenous people of Japan.",
      image: "/images/ainu.jpg",
    },
    {
      name: "Igala",
      rating: 4.6,
      description: "Explore the Igala language of Nigeria with structured lessons.",
      image: "/images/igala.jpg",
    },
    {
      name: "Manchu",
      rating: 4.7,
      description: "Study the historical Manchu language and its script.",
      image: "/images/manchu.jpg",
    },
    {
      name: "Hindi",
      rating: 4.9,
      description: "Learn modern Hindi with grammar, vocabulary, and practice modules.",
      image: "/images/hindi.jpg",
    },
  ];

  return (
    <div className="mt-10">
      <div className="flex flex-wrap gap-6 justify-center">
        {courses.map((course, index) => (
          <LanguageCourseCard
            key={index}
            {...course}
            onEnroll={() => setSelectedCourse(course.name)}
          />
        ))}
      </div>

      <ModalForm
        isOpen={!!selectedCourse}
        courseName={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </div>
  );
}
