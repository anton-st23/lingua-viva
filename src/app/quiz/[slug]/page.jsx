"use client";

import { useParams } from "next/navigation";
import { quizQuestions } from "../../../data/quizData";
import { useState } from "react";

export default function QuizPage() {
  const { slug } = useParams();
  const key = slug.toLowerCase();
  const questions = quizQuestions[key] || [];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!questions.length) {
    return <p className="p-12 text-red-600 text-center">No quiz available for {slug}</p>;
  }

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  return (
    <main className="min-h-screen p-12 bg-gray-50">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        Quiz for {slug.charAt(0).toUpperCase() + slug.slice(1)}
      </h1>

      {finished ? (
        <div className="text-center">
          <p className="text-xl mb-4 font-semibold">You scored {score} / {questions.length}</p>
          <button
            onClick={() => { setCurrent(0); setScore(0); setFinished(false); }}
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 font-medium"
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl space-y-6">
          <p className="text-lg md:text-xl font-semibold mb-4">{questions[current].question}</p>
          <div className="grid gap-4">
            {questions[current].options.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className="px-5 py-3 bg-indigo-500 text-white rounded-2xl shadow-md hover:bg-indigo-600 hover:scale-105 transform transition-all duration-300 font-semibold text-center"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
