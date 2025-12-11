"use client";

import LanguageBot from "@/components/LanguageChatBot";
import Link from "next/link";
import { ArrowRight, Globe, Book, Percent, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import LanguageTrends from "../components/LanguageTrends";
import DailyPhrase from "../components/DailyPhrase";

function AnimatedCounter({ value, duration = 2 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span>{count.toLocaleString()}</span>;
}

export default function HomePage() {
  return (
    <main className="space-y-24 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 min-h-screen text-gray-800">

      <section className="rounded-3xl p-12 text-white shadow-xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <div className="flex justify-center mb-6">
          <Image
            src="/icons/lingualogo.jpg"
            alt="Atlas Icon"
            width={140}
            height={140}
            className="drop-shadow-xl rounded-full bg-transparent transition-transform duration-300 hover:scale-110"
          />
        </div>

        <h1 className="text-5xl font-bold drop-shadow-md">
          Endangered Languages Atlas
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Explore rare and endangered languages around the world through an
          interactive map and a curated gallery of 70+ endangered languages.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
  <Link
    href="/map"
    className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-indigo-600 font-semibold hover:bg-gray-100 transition"
  >
    View Map <ArrowRight size={18} />
  </Link>
  <Link
    href="/gallery"
    className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-purple-600 font-semibold hover:bg-gray-100 transition"
  >
    View Gallery <ArrowRight size={18} />
  </Link>
  <Link
    href="/quiz"
    className="inline-flex items-center gap-2 rounded-2xl bg-white px-6 py-3 text-pink-600 font-semibold hover:bg-gray-100 transition"
  >
    Try to take Quiz <ArrowRight size={18} />
  </Link>
</div>


        
      </section>

      <section className="flex flex-col md:flex-row items-center gap-12 px-8">
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl font-bold text-indigo-700">Who We Are</h2>
          <p className="text-lg text-indigo-700 leading-relaxed">
            <strong>LinguaViva</strong> is a newly established non-profit organization registered 
            by the Korean government committed to the preservation of endangered languages 
            around the world. Language is more than just a means of communication—it carries 
            the collective memory, identity, and cultural heritage of communities. 
            As global languages disappear at an alarming rate, Lingua Viva stands at the forefront 
            of recording, archiving, and celebrating these invaluable voices before they vanish.
          </p>
          <p className="text-lg text-indigo-700 leading-relaxed">
            We believe that every language is a living treasure — carrying unique
            traditions, stories, and wisdom. With our interactive platform,
            we aim to raise awareness and create opportunities for collaboration
            worldwide.
          </p>
        </div>

        <div className="flex-1 flex justify-end">
          <Image
            src="/icons/languages-signpost.jpg"
            alt="LinguaViva Team"
            width={600}
            height={400}
            className="rounded-3xl shadow-xl object-cover border-4 border-white"
          />
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        <div className="rounded-2xl shadow-md p-6 text-center space-y-3 bg-white">
          <Globe className="mx-auto h-10 w-10 text-indigo-600" />
          <h3 className="text-3xl font-bold text-indigo-700">
            <AnimatedCounter value={15} />
          </h3>
          <p className="text-gray-600">Languages Saved</p>
        </div>
        <div className="rounded-2xl shadow-md p-6 text-center space-y-3 bg-white">
          <Book className="mx-auto h-10 w-10 text-purple-600" />
          <h3 className="text-3xl font-bold text-purple-700">
            <AnimatedCounter value={2698} />
          </h3>
          <p className="text-gray-600">Endangered Languages</p>
        </div>
        <div className="rounded-2xl shadow-md p-6 text-center space-y-3 bg-white">
          <Percent className="mx-auto h-10 w-10 text-pink-600" />
          <h3 className="text-3xl font-bold text-pink-700">
            Up to <AnimatedCounter value={90} />%
          </h3>
          <p className="text-gray-600">May Disappear This Century</p>
        </div>
        <div className="rounded-2xl shadow-md p-6 text-center space-y-3 bg-white">
          <Clock className="mx-auto h-10 w-10 text-yellow-600" />
          <h3 className="text-3xl font-bold text-yellow-700">
            <AnimatedCounter value={9} />
          </h3>
          <p className="text-gray-600">Languages Lost Each Year</p>
        </div>
      </section>

      <section className="bg-white py-12 px-8 text-center rounded-3xl mx-8 shadow-xl">
        <h2 className="text-4xl font-bold text-indigo-700">Our Strategic Objectives</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          At LinguaViva, we align our mission with UNESCO's strategic objectives to ensure the preservation of endangered languages and promote sustainable development.
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700">Inclusive Education</h3>
            <p className="mt-2 text-gray-600">
              We support quality, equitable, and inclusive education, promoting lifelong learning opportunities for all.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700">Sustainable Societies</h3>
            <p className="mt-2 text-gray-600">
              We work towards sustainability and protect the environment through knowledge sharing and respect for biodiversity.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700">Social Inclusion</h3>
            <p className="mt-2 text-gray-600">
              We build inclusive societies by promoting respect, tolerance, and fighting against racism and misinformation.
            </p>
          </div>
          <div className="p-6 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-indigo-700">Technology for Humanity</h3>
            <p className="mt-2 text-gray-600">
              We foster a technological environment that serves humankind by developing and disseminating knowledge and ethical standards.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 px-8">
        <LanguageBot />
      </section>
      <section className="py-12 px-8">
        <LanguageTrends />
      </section>
      <section className="py-12 px-8">
        <DailyPhrase />
      </section>

      <footer className="bg-indigo-200 text-gray-800 text-center py-6 rounded-t-3xl">
        <p>© {new Date().getFullYear()} LinguaViva | Contact: <a href="mailto:linguaviva0221@gmail.com" className="underline">linguaviva0221@gmail.com</a></p>
      </footer>
    </main>
  );
}
