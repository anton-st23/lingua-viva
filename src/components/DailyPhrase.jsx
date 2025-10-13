"use client";

import { useEffect, useState } from "react";

const phrasesData = {
  Ainu: [
    { phrase: "Irankarapte", translation: "Здравствуйте" },
    { phrase: "Irankarapte aynu", translation: "Привет, друг" },
    { phrase: "Kamuy ceppesuy", translation: "Благодарю духов" },
  ],
  Livonian: [
    { phrase: "Tere", translation: "Привет" },
    { phrase: "Tänan", translation: "Спасибо" },
    { phrase: "Head päeva", translation: "Хорошего дня" },
  ],
  Cornish: [
    { phrase: "Dydh da", translation: "Добрый день" },
    { phrase: "Meur ras", translation: "Спасибо" },
    { phrase: "Gorthugher da", translation: "До свидания" },
  ],
  Manx: [
    { phrase: "Fastyr mie", translation: "Доброе утро" },
    { phrase: "Gura mie eu", translation: "Спасибо" },
    { phrase: "Slane lhiat", translation: "До свидания" },
  ],
  Breton: [
    { phrase: "Demat", translation: "Добрый день" },
    { phrase: "Trugarez", translation: "Спасибо" },
    { phrase: "Kenavo", translation: "До свидания" },
  ],
  NorthernSami: [
    { phrase: "Bures", translation: "Привет" },
    { phrase: "Giitu", translation: "Спасибо" },
    { phrase: "Buorre beaivi", translation: "Добрый день" },
  ],
  Ladino: [
    { phrase: "Shalom", translation: "Привет" },
    { phrase: "Toda", translation: "Спасибо" },
    { phrase: "Buen dia", translation: "Добрый день" },
  ],
  Romani: [
    { phrase: "Sastipe", translation: "Привет" },
    { phrase: "Dikhes", translation: "До свидания" },
    { phrase: "Merci", translation: "Спасибо" },
  ],
  Nahuatl: [
    { phrase: "Niltze", translation: "Привет" },
    { phrase: "Tlazohcamati", translation: "Спасибо" },
    { phrase: "Cualli tonalli", translation: "Хорошего дня" },
  ],
  Quechua: [
    { phrase: "Rimaykullayki", translation: "Привет" },
    { phrase: "Sulpayki", translation: "Спасибо" },
    { phrase: "Allin p'unchay", translation: "Добрый день" },
  ],
  Guarani: [
    { phrase: "Mba'eteko", translation: "Привет" },
    { phrase: "Aguyje", translation: "Спасибо" },
    { phrase: "Jajotopata", translation: "До встречи" },
  ],
  Maori: [
    { phrase: "Kia ora", translation: "Привет" },
    { phrase: "Ngā mihi", translation: "Спасибо" },
    { phrase: "Haere rā", translation: "До свидания" },
  ],
  Hawaiian: [
    { phrase: "Aloha", translation: "Привет / Любовь" },
    { phrase: "Mahalo", translation: "Спасибо" },
    { phrase: "A hui hou", translation: "До встречи" },
  ],
  Yuchi: [
    { phrase: "Yvwi", translation: "Привет" },
    { phrase: "Hvtma", translation: "Спасибо" },
    { phrase: "Asa yvwi", translation: "До свидания" },
  ],
  Cherokee: [
    { phrase: "ᎣᏏᏲ (Osiyo)", translation: "Привет" },
    { phrase: "ᏩᏙ (Wado)", translation: "Спасибо" },
    { phrase: "ᎣᏏᏲᏍᎩ (Osiyosgi)", translation: "До свидания" },
  ],
  Basque: [
    { phrase: "Kaixo", translation: "Привет" },
    { phrase: "Eskerrik asko", translation: "Спасибо" },
    { phrase: "Agur", translation: "До свидания" },
  ],
  Friulian: [
    { phrase: "Mandi", translation: "Привет" },
    { phrase: "Gracie", translation: "Спасибо" },
    { phrase: "Doman", translation: "До свидания" },
  ],
  Sardinian: [
    { phrase: "Bona die", translation: "Добрый день" },
    { phrase: "Gratzias", translation: "Спасибо" },
    { phrase: "A si biri", translation: "До встречи" },
  ],
  Occitan: [
    { phrase: "Bonjorn", translation: "Добрый день" },
    { phrase: "Mercé", translation: "Спасибо" },
    { phrase: "Adieu", translation: "До свидания" },
  ],
  Achumawi: [
    { phrase: "Awin", translation: "Привет" },
    { phrase: "Nopa", translation: "Спасибо" },
  ],
  Ahtna: [
    { phrase: "Togh", translation: "Привет" },
    { phrase: "Dlel", translation: "Спасибо" },
  ],
  Blackfoot: [
    { phrase: "Oki", translation: "Привет" },
    { phrase: "Nitsik", translation: "Спасибо" },
  ],
  Selknam: [
    { phrase: "Xais", translation: "Привет" },
    { phrase: "Nok", translation: "Спасибо" },
  ],
  Ongota: [
    { phrase: "Alo", translation: "Привет" },
    { phrase: "Mise", translation: "Спасибо" },
  ],
  Yaakunte: [
    { phrase: "Eya", translation: "Привет" },
    { phrase: "Nya", translation: "Спасибо" },
  ],
  Belarusian: [
    { phrase: "Вітаю", translation: "Привет" },
    { phrase: "Дзякуй", translation: "Спасибо" },
  ],
  LowSaxon: [
    { phrase: "Moin", translation: "Привет" },
    { phrase: "Dank", translation: "Спасибо" },
  ],
  SouthItalian: [
    { phrase: "Ciao", translation: "Привет" },
    { phrase: "Grazie", translation: "Спасибо" },
  ],
  Sicilian: [
    { phrase: "Ciau", translation: "Привет" },
    { phrase: "Grazi", translation: "Спасибо" },
  ],
  Lombard: [
    { phrase: "Bun dì", translation: "Добрый день" },
    { phrase: "Mersì", translation: "Спасибо" },
  ],
  Gondi: [
    { phrase: "Nomoskar", translation: "Привет" },
    { phrase: "Danyavaad", translation: "Спасибо" },
  ],
  Limburgian: [
    { phrase: "Hoi", translation: "Привет" },
    { phrase: "Dankjewel", translation: "Спасибо" },
  ],
  Bajau: [
    { phrase: "Hai", translation: "Привет" },
    { phrase: "Terima kasih", translation: "Спасибо" },
  ],
  Tswana: [
    { phrase: "Dumela", translation: "Привет" },
    { phrase: "Ke a leboga", translation: "Спасибо" },
  ],
  Zulu: [
    { phrase: "Sawubona", translation: "Привет" },
    { phrase: "Ngiyabonga", translation: "Спасибо" },
  ],
  Xhosa: [
    { phrase: "Molo", translation: "Привет" },
    { phrase: "Enkosi", translation: "Спасибо" },
  ],
  Sotho: [
    { phrase: "Dumelang", translation: "Привет" },
    { phrase: "Kea leboha", translation: "Спасибо" },
  ],
  Swati: [
    { phrase: "Sawubona", translation: "Привет" },
    { phrase: "Ngiyabonga", translation: "Спасибо" },
  ],
  Afrikaans: [
    { phrase: "Hallo", translation: "Привет" },
    { phrase: "Dankie", translation: "Спасибо" },
  ],
  English: [
    { phrase: "Hello", translation: "Привет" },
    { phrase: "Thank you", translation: "Спасибо" },
  ],
  French: [
    { phrase: "Bonjour", translation: "Здравствуйте" },
    { phrase: "Merci", translation: "Спасибо" },
  ],
  Spanish: [
    { phrase: "Hola", translation: "Привет" },
    { phrase: "Gracias", translation: "Спасибо" },
  ],
  Arabic: [
    { phrase: "Marhaban", translation: "Привет" },
    { phrase: "Shukran", translation: "Спасибо" },
  ],
  Portuguese: [
    { phrase: "Olá", translation: "Привет" },
    { phrase: "Obrigado", translation: "Спасибо" },
  ],
  Russian: [
    { phrase: "Привет", translation: "Hello" },
    { phrase: "Спасибо", translation: "Thank you" },
  ],
  Chinese: [
    { phrase: "你好 (Nǐ hǎo)", translation: "Привет" },
    { phrase: "谢谢 (Xièxiè)", translation: "Спасибо" },
  ],
  Hindi: [
    { phrase: "नमस्ते (Namaste)", translation: "Привет" },
    { phrase: "धन्यवाद (Dhanyavaad)", translation: "Спасибо" },
  ],
  Bengali: [
    { phrase: "হ্যালো (Hyālō)", translation: "Привет" },
    { phrase: "ধন্যবাদ (Dhonnobad)", translation: "Спасибо" },
  ],
  Urdu: [
    { phrase: "سلام (Salam)", translation: "Привет" },
    { phrase: "شکریہ (Shukriya)", translation: "Спасибо" },
  ],
  Japanese: [
    { phrase: "こんにちは", translation: "Здравствуйте" },
    { phrase: "ありがとう", translation: "Спасибо" },
    { phrase: "さようなら", translation: "До свидания" },
  ],
};


export default function DailyPhrase() {
  const [currentPhrase, setCurrentPhrase] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("Ainu");

  useEffect(() => {
    const languages = Object.keys(phrasesData);
    const now = new Date();
    const hoursSinceEpoch = Math.floor(now.getTime() / (1000 * 60 * 60));
    const index = Math.floor(hoursSinceEpoch / 10);

    const languageIndex = index % languages.length;
    const language = languages[languageIndex];

    const phrases = phrasesData[language];
    const phraseIndex = index % phrases.length;

    setCurrentPhrase({ language, ...phrases[phraseIndex] });
  }, []);

  const speakPhrase = (phrase, langCode = "en-US") => {
    if (!phrase) return;
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = langCode; 
    speechSynthesis.speak(utterance);
  };

  if (!currentPhrase) return null;

  return (
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl shadow-lg mt-8">
      
      <div className="flex-1 text-center md:text-left space-y-4">
        <h3 className="text-lg font-semibold text-indigo-700">Language: {currentPhrase.language}</h3>
        <p className="text-2xl font-bold text-gray-800">{currentPhrase.phrase}</p>
        <p className="text-gray-600 italic">Translate: {currentPhrase.translation}</p>
        <button
          className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          onClick={() => speakPhrase(currentPhrase.phrase)}
        >
          Послушать
        </button>
      </div>

      <div className="flex-1 mt-6 md:mt-0 md:ml-8 p-4 bg-white rounded-xl shadow-inner space-y-3">
        <h4 className="font-semibold text-indigo-700 mb-2">Select language to see all phrases:</h4>
        <select
          className="w-full px-4 py-2 rounded-lg border border-gray-300"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          {Object.keys(phrasesData).map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <div className="space-y-2 mt-4">
          {phrasesData[selectedLanguage].map((item, idx) => (
            <button
              key={idx}
              onClick={() => speakPhrase(item.phrase)}
              className="w-full text-left px-4 py-2 bg-indigo-100 rounded-lg hover:bg-indigo-200 transition"
            >
              {item.phrase} — <span className="text-gray-600 italic">{item.translation}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}