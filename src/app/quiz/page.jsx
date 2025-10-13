"use client";

import Link from "next/link";

const languages = [
  { slug: "ainu", name: "Ainu" },
  { slug: "livonian", name: "Livonian" },
  { slug: "cornish", name: "Cornish" },
  { slug: "manx", name: "Manx" },
  { slug: "breton", name: "Breton" },
  { slug: "northern_sami", name: "Northern Sámi" },
  { slug: "ladino", name: "Ladino (Judeo-Spanish)" },
  { slug: "romani", name: "Romani" },
  { slug: "nahuatl", name: "Nahuatl" },
  { slug: "quechua", name: "Quechua" },
  { slug: "guarani", name: "Guaraní" },
  { slug: "maori", name: "Māori" },
  { slug: "hawaiian", name: "Hawaiian" },
  { slug: "yuchi", name: "Yuchi" },
  { slug: "cherokee", name: "Cherokee" },
  { slug: "basque", name: "Basque (Euskara)" },
  { slug: "friulian", name: "Friulian" },
  { slug: "sardinian", name: "Sardinian" },
  { slug: "occitan", name: "Occitan" },
  { slug: "achumawi", name: "Achumawi" },
  { slug: "ahtna", name: "Ahtna" },
  { slug: "blackfoot", name: "Blackfoot" },
  { slug: "selknam", name: "Selk'nam" },
  { slug: "ongota", name: "Ongota" },
  { slug: "yaakunte", name: "Yaakunte" },
  { slug: "belarusian", name: "Belarusian" },
  { slug: "low_saxon", name: "Low Saxon" },
  { slug: "south_italian", name: "South Italian" },
  { slug: "sicilian", name: "Sicilian" },
  { slug: "lombard", name: "Lombard" },
  { slug: "gondi", name: "Gondi" },
  { slug: "limburgian", name: "Limburgian" },
  { slug: "bajau", name: "Bajau" },
  { slug: "tswana", name: "Tswana" },
  { slug: "zulu", name: "Zulu" },
  { slug: "xhosa", name: "Xhosa" },
  { slug: "sotho", name: "Sotho" },
  { slug: "swati", name: "Swati" },
  { slug: "afrikaans", name: "Afrikaans" },
  { slug: "english", name: "English" },
  { slug: "french", name: "French" },
  { slug: "spanish", name: "Spanish" },
  { slug: "arabic", name: "Arabic" },
  { slug: "portuguese", name: "Portuguese" },
  { slug: "russian", name: "Russian" },
  { slug: "chinese", name: "Chinese" },
  { slug: "hindi", name: "Hindi" },
  { slug: "bengali", name: "Bengali" },
  { slug: "urdu", name: "Urdu" },
  { slug: "japanese", name: "Japanese" }
];

export default function QuizListPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-50 p-12 flex flex-col items-center">
      <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-12 text-center">
        🌍 Choose Your Language Quiz
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {languages.map((lang) => (
          <Link
            key={lang.slug}
            href={`/quiz/${lang.slug}`}
            className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
          >
            {/* Градиентная подложка */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 opacity-80 group-hover:opacity-100 transition duration-300"></div>
            
            {/* Содержимое карточки */}
            <div className="relative z-10 p-8 flex flex-col items-center justify-center h-48 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{lang.name}</h2>
              <p className="text-sm md:text-base opacity-90 group-hover:opacity-100 transition">
                Take the {lang.name} quiz and test your knowledge!
              </p>
            </div>

            {/* Эффект подсветки */}
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 rounded-2xl transition duration-300"></div>
          </Link>
        ))}
      </div>
    </main>
  );
}
