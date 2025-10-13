"use client";

import { useState } from "react";
import questionsData from "../data/questions.json";

export default function LanguageQuiz({ language }) {
  const questions = questionsData[language] || [];
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);

  if (questions.length === 0) {
    return <p className="text-center text-gray-600 mt-12">No quiz available for this language.</p>;
  }

  const question = questions[current];
  const progress = ((current + (showAnswer ? 1 : 0)) / questions.length) * 100;

  function handleAnswer(option) {
    setSelected(option);
    setShowAnswer(true);
    if (option === question.answer) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    setSelected(null);
    setShowAnswer(false);
    setCurrent((prev) => prev + 1);
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-3xl p-8 mt-12 space-y-8">
      {/* Заголовок и прогресс */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-700 mb-2">
          Quiz: {language.toUpperCase()}
        </h2>
        <div className="relative w-full h-4 bg-gray-300 rounded-full mt-4 overflow-hidden">
          <div
            className="absolute h-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-500">{current + 1} / {questions.length}</p>
      </div>

      {/* Вопрос */}
      <div>
        <p className="text-xl md:text-2xl font-medium mb-6">{question.question}</p>
        <div className="grid grid-cols-1 gap-4">
          {question.options.map((opt, i) => {
            const isSelected = selected === opt;
            const isCorrect = opt === question.answer;
            return (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                disabled={showAnswer}
                className={`p-4 rounded-2xl text-lg font-medium shadow-lg transition-all duration-300 transform
                  ${
                    isSelected
                      ? isCorrect
                        ? "bg-green-400 border-green-600 text-white shadow-xl scale-105"
                        : "bg-red-400 border-red-600 text-white shadow-xl scale-105"
                      : "bg-white border border-gray-300 hover:bg-indigo-100 hover:scale-105"
                  }`}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>

      {/* Ответ */}
      {showAnswer && (
        <div className="text-center mt-4 space-y-4">
          {selected === question.answer ? (
            <p className="text-green-700 font-bold text-2xl animate-pulse">✅ Correct!</p>
          ) : (
            <p className="text-red-700 font-bold text-2xl">
              ❌ Wrong! Correct answer: <span className="underline">{question.answer}</span>
            </p>
          )}

          {current + 1 < questions.length ? (
            <button
              onClick={nextQuestion}
              className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
            >
              Next →
            </button>
          ) : (
            <div className="mt-6 bg-indigo-50 p-6 rounded-2xl shadow-inner">
              <p className="text-2xl md:text-3xl font-bold text-indigo-700">
                🎉 Quiz finished!
              </p>
              <p className="text-xl mt-2">
                Your score: <span className="font-extrabold">{score}</span> / {questions.length}
              </p>
              <button
                onClick={() => { setCurrent(0); setScore(0); setSelected(null); setShowAnswer(false); }}
                className="mt-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl shadow-lg hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold"
              >
                Retry
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
