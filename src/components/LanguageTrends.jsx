"use client";
import { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";

export const trendsData = {
  "Ainu": [
    { year: 1900, speakers: 15000 },
    { year: 1950, speakers: 2000 },
    { year: 2000, speakers: 100 },
    { year: 2025, speakers: 10 }
  ],
  "Livonian": [
    { year: 1900, speakers: 2000 },
    { year: 1950, speakers: 500 },
    { year: 2000, speakers: 100 },
    { year: 2025, speakers: 30 }
  ],
  "Cornish": [
    { year: 1900, speakers: 0 }, 
    { year: 1950, speakers: 0 },
    { year: 2000, speakers: 300 },
    { year: 2025, speakers: 600 }
  ],
  "Manx": [
    { year: 1900, speakers: 2000 },
    { year: 1950, speakers: 100 },
    { year: 2000, speakers: 500 },
    { year: 2025, speakers: 2000 }
  ],
  "Breton": [
    { year: 1900, speakers: 1000000 },
    { year: 1950, speakers: 600000 },
    { year: 2000, speakers: 250000 },
    { year: 2025, speakers: 200000 }
  ],
  "Northern Sámi": [
    { year: 1900, speakers: 15000 },
    { year: 1950, speakers: 20000 },
    { year: 2000, speakers: 22000 },
    { year: 2025, speakers: 25000 }
  ],
  "Ladino": [
    { year: 1900, speakers: 200000 },
    { year: 1950, speakers: 150000 },
    { year: 2000, speakers: 80000 },
    { year: 2025, speakers: 60000 }
  ],
  "Romani": [
    { year: 1900, speakers: 2500000 },
    { year: 1950, speakers: 3000000 },
    { year: 2000, speakers: 3300000 },
    { year: 2025, speakers: 3500000 }
  ],
  "Nahuatl": [
    { year: 1900, speakers: 800000 },
    { year: 1950, speakers: 1200000 },
    { year: 2000, speakers: 1500000 },
    { year: 2025, speakers: 1500000 }
  ],
  "Quechua": [
    { year: 1900, speakers: 6000000 },
    { year: 1950, speakers: 7000000 },
    { year: 2000, speakers: 7500000 },
    { year: 2025, speakers: 8000000 }
  ],
  "Guaraní": [
    { year: 1900, speakers: 4000000 },
    { year: 1950, speakers: 5000000 },
    { year: 2000, speakers: 6500000 },
    { year: 2025, speakers: 7000000 }
  ],
  "Māori": [
    { year: 1900, speakers: 150000 },
    { year: 1950, speakers: 80000 },
    { year: 2000, speakers: 30000 },
    { year: 2025, speakers: 50000 }
  ],
  "Hawaiian": [
    { year: 1900, speakers: 30000 },
    { year: 1950, speakers: 5000 },
    { year: 2000, speakers: 1000 },
    { year: 2025, speakers: 2000 }
  ],
  "Yuchi": [
    { year: 1900, speakers: 1500 },
    { year: 1950, speakers: 500 },
    { year: 2000, speakers: 30 },
    { year: 2025, speakers: 5 }
  ],
  "Cherokee": [
    { year: 1900, speakers: 30000 },
    { year: 1950, speakers: 15000 },
    { year: 2000, speakers: 8000 },
    { year: 2025, speakers: 2200 }
  ],
  "Basque": [
    { year: 1900, speakers: 600000 },
    { year: 1950, speakers: 700000 },
    { year: 2000, speakers: 730000 },
    { year: 2025, speakers: 750000 }
  ],
  "Friulian": [
    { year: 1900, speakers: 800000 },
    { year: 1950, speakers: 700000 },
    { year: 2000, speakers: 650000 },
    { year: 2025, speakers: 600000 }
  ],
  "Sardinian": [
    { year: 1900, speakers: 1600000 },
    { year: 1950, speakers: 1400000 },
    { year: 2000, speakers: 1300000 },
    { year: 2025, speakers: 1200000 }
  ],
  "Occitan": [
    { year: 1900, speakers: 3000000 },
    { year: 1950, speakers: 2500000 },
    { year: 2000, speakers: 2200000 },
    { year: 2025, speakers: 2000000 }
  ],
  "Achumawi": [
    { year: 1900, speakers: 1000 },
    { year: 1950, speakers: 200 },
    { year: 2000, speakers: 20 },
    { year: 2025, speakers: 8 }
  ],
  "Ahtna": [
    { year: 1900, speakers: 1500 },
    { year: 1950, speakers: 500 },
    { year: 2000, speakers: 200 },
    { year: 2025, speakers: 80 }
  ],
  "Blackfoot": [
    { year: 1900, speakers: 15000 },
    { year: 1950, speakers: 10000 },
    { year: 2000, speakers: 7000 },
    { year: 2025, speakers: 5100 }
  ],
  "Selk'nam": [
    { year: 1900, speakers: 4000 },
    { year: 1950, speakers: 200 },
    { year: 2000, speakers: 5 },
    { year: 2025, speakers: 1 }
  ],
  "Ongota": [
    { year: 1900, speakers: 500 },
    { year: 1950, speakers: 200 },
    { year: 2000, speakers: 20 },
    { year: 2025, speakers: 5 }
  ],
  "Yaakunte": [
    { year: 1900, speakers: 600 },
    { year: 1950, speakers: 300 },
    { year: 2000, speakers: 30 },
    { year: 2025, speakers: 9 }
  ],
  "Belarusian": [
    { year: 1900, speakers: 6000000 },
    { year: 1950, speakers: 5000000 },
    { year: 2000, speakers: 4500000 },
    { year: 2025, speakers: 4000000 }
  ],
  "Low Saxon": [
    { year: 1900, speakers: 6000000 },
    { year: 1950, speakers: 5500000 },
    { year: 2000, speakers: 5000000 },
    { year: 2025, speakers: 4800000 }
  ],
  "South Italian": [
    { year: 1900, speakers: 8000000 },
    { year: 1950, speakers: 7700000 },
    { year: 2000, speakers: 7600000 },
    { year: 2025, speakers: 7500000 }
  ],
  "Sicilian": [
    { year: 1900, speakers: 6000000 },
    { year: 1950, speakers: 5500000 },
    { year: 2000, speakers: 5200000 },
    { year: 2025, speakers: 5000000 }
  ],
  "Lombard": [
    { year: 1900, speakers: 5000000 },
    { year: 1950, speakers: 4200000 },
    { year: 2000, speakers: 3800000 },
    { year: 2025, speakers: 3500000 }
  ],
  "Gondi": [
    { year: 1900, speakers: 3000000 },
    { year: 1950, speakers: 2900000 },
    { year: 2000, speakers: 2800000 },
    { year: 2025, speakers: 2713790 }
  ],
  "Limburgian": [
    { year: 1900, speakers: 3000000 },
    { year: 1950, speakers: 2800000 },
    { year: 2000, speakers: 2700000 },
    { year: 2025, speakers: 2600000 }
  ],
  "Bajau": [
    { year: 1900, speakers: 1200000 },
    { year: 1950, speakers: 1100000 },
    { year: 2000, speakers: 1050000 },
    { year: 2025, speakers: 1000000 }
  ],
  "Tswana": [
    { year: 1900, speakers: 3000000 },
    { year: 1950, speakers: 4000000 },
    { year: 2000, speakers: 4800000 },
    { year: 2025, speakers: 5000000 }
  ],
  "Zulu": [
    { year: 1900, speakers: 8000000 },
    { year: 1950, speakers: 10000000 },
    { year: 2000, speakers: 11000000 },
    { year: 2025, speakers: 12000000 }
  ],
  "Xhosa": [
    { year: 1900, speakers: 10000000 },
    { year: 1950, speakers: 14000000 },
    { year: 2000, speakers: 17000000 },
    { year: 2025, speakers: 19000000 }
  ],
  "Sotho": [
    { year: 1900, speakers: 4000000 },
    { year: 1950, speakers: 5000000 },
    { year: 2000, speakers: 5500000 },
    { year: 2025, speakers: 6000000 }
  ],
  "Swati": [
    { year: 1900, speakers: 800000 },
    { year: 1950, speakers: 1200000 },
    { year: 2000, speakers: 1700000 },
    { year: 2025, speakers: 2000000 }
  ],
  "Afrikaans": [
    { year: 1900, speakers: 4000000 },
    { year: 1950, speakers: 5500000 },
    { year: 2000, speakers: 6500000 },
    { year: 2025, speakers: 7000000 }
  ],
  "English": [
    { year: 1900, speakers: 400000000 },
    { year: 1950, speakers: 800000000 },
    { year: 2000, speakers: 1200000000 },
    { year: 2025, speakers: 1500000000 }
  ],
  "French": [
    { year: 1900, speakers: 80000000 },
    { year: 1950, speakers: 150000000 },
    { year: 2000, speakers: 250000000 },
    { year: 2025, speakers: 300000000 }
  ],
  "Spanish": [
    { year: 1900, speakers: 120000000 },
    { year: 1950, speakers: 200000000 },
    { year: 2000, speakers: 350000000 },
    { year: 2025, speakers: 460000000 }
  ],
  "Arabic": [
    { year: 1900, speakers: 100000000 },
    { year: 1950, speakers: 180000000 },
    { year: 2000, speakers: 250000000 },
    { year: 2025, speakers: 310000000 }
  ],
  "Portuguese": [
    { year: 1900, speakers: 60000000 },
    { year: 1950, speakers: 100000000 },
    { year: 2000, speakers: 180000000 },
    { year: 2025, speakers: 220000000 }
  ],
  "Russian": [
    { year: 1900, speakers: 100000000 },
    { year: 1950, speakers: 130000000 },
    { year: 2000, speakers: 140000000 },
    { year: 2025, speakers: 150000000 }
  ],
  "Chinese": [
    { year: 1900, speakers: 400000000 },
    { year: 1950, speakers: 700000000 },
    { year: 2000, speakers: 1100000000 },
    { year: 2025, speakers: 1300000000 }
  ],
  "Hindi": [
    { year: 1900, speakers: 150000000 },
    { year: 1950, speakers: 300000000 },
    { year: 2000, speakers: 450000000 },
    { year: 2025, speakers: 600000000 }
  ],
  "Bengali": [
    { year: 1900, speakers: 80000000 },
    { year: 1950, speakers: 130000000 },
    { year: 2000, speakers: 180000000 },
    { year: 2025, speakers: 230000000 }
  ],
  "Urdu": [
    { year: 1900, speakers: 70000000 },
    { year: 1950, speakers: 100000000 },
    { year: 2000, speakers: 140000000 },
    { year: 2025, speakers: 170000000 }
  ],
  "Japanese": [
    { year: 1900, speakers: 60000000 },
    { year: 1950, speakers: 90000000 },
    { year: 2000, speakers: 115000000 },
    { year: 2025, speakers: 125000000 }
  ]
};


export default function LanguageTrends() {
  const [selectedLanguage, setSelectedLanguage] = useState("Ainu");

  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📈 Language Tendency</h2>

      <select
        className="border p-2 mb-6"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {Object.keys(trendsData).map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </select>

      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={trendsData[selectedLanguage]}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="speakers" stroke="#8884d8" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
