"use client";

import { useState } from "react";
import languagesData from "../data/languages.json";

export default function LanguageChatBot() {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! 🌍 I'm your LinguaViva assistant. Ask me anything about endangered languages, culture, or even science!",
    },
  ]);
  const [input, setInput] = useState("");
 
  function getBotResponse(message) {
    const msg = message.toLowerCase();

    // --- Greetings ---
    if (/(hello|hi|hey|yo|good morning|good evening)/.test(msg)) {
      const replies = [
        "Hi there! 👋 Which language do you want to know about?",
        "Hello! 🌟 Ask me about rare languages, I know quite a lot.",
        "Hey! 👋 Curious about endangered languages? Let’s explore together.",
        "Hi! How are you doing today?",
      ];
      return replies[Math.floor(Math.random() * replies.length)];
    }

    // --- Asking about recommendations ---
    if (msg.includes("which language") || msg.includes("should i learn") || msg.includes("recommend")) {
      const endangered = [...languagesData].sort((a, b) => a.speakers - b.speakers);
      const suggestion = endangered[0];
      return `I recommend learning **${suggestion.name}** (${suggestion.region}). It has only ${suggestion.speakers.toLocaleString()} speakers left — truly rare!`;
    }

    // --- Rarest language ---
    if (msg.includes("rarest") || msg.includes("most endangered")) {
      const rarest = [...languagesData].sort((a, b) => a.speakers - b.speakers)[0];
      return `The rarest language I know is **${rarest.name}**, spoken in ${rarest.region}, with only ${rarest.speakers.toLocaleString()} speakers.`;
    }

    // --- Largest by speakers ---
    if (msg.includes("most speakers") || msg.includes("largest") || msg.includes("popular")) {
      const largest = [...languagesData].sort((a, b) => b.speakers - a.speakers)[0];
      return `The language with the most speakers in our endangered list is **${largest.name}**, with about ${largest.speakers.toLocaleString()} speakers.`;
    }

    // --- Status of languages ---
    if (msg.includes("status") || msg.includes("condition") || msg.includes("endangered")) {
      const langs = languagesData.map((l) => `${l.name} (${l.status})`).join(", ");
      return `Here are some languages and their statuses: ${langs}`;
    }

    // --- Compare two languages ---
    if (msg.includes("compare")) {
      const parts = msg.split("compare")[1]?.trim().split("and");
      if (parts && parts.length === 2) {
        const lang1 = languagesData.find((l) => parts[0].trim().includes(l.name.toLowerCase()));
        const lang2 = languagesData.find((l) => parts[1].trim().includes(l.name.toLowerCase()));
        if (lang1 && lang2) {
          return `Here’s the comparison:\n- **${lang1.name}** (${lang1.region}, ${lang1.speakers.toLocaleString()} speakers, status: ${lang1.status})\n- **${lang2.name}** (${lang2.region}, ${lang2.speakers.toLocaleString()} speakers, status: ${lang2.status})`;
        }
      }
      return "Please specify two languages to compare, e.g. 'compare A and B'.";
    }

    // --- Facts about UNESCO ---
    if (msg.includes("unesco") || msg.includes("united nations")) {
      return "UNESCO is the United Nations Educational, Scientific and Cultural Organization. It works to preserve cultural heritage, promote education, and support scientific cooperation worldwide.";
    }

    // --- General knowledge ---
    if (msg.includes("oldest language") || msg.includes("ancient language")) {
      return "One of the oldest still spoken languages is **Tamil**, which is over 2000 years old. Sanskrit is also considered one of the most ancient languages.";
    }
    if (msg.includes("math") || msg.includes("pythagoras")) {
      return "The Pythagorean theorem states that a² + b² = c², where c is the hypotenuse of a right triangle.";
    }
    if (msg.includes("quantum")) {
      return "Quantum physics studies particles on a very small scale, where classical rules break down and probabilities dominate.";
    }

    // --- Everyday chit-chat ---
    if (msg.includes("how are you")) {
      const replies = [
        "I'm doing great, thanks for asking! How about you?",
        "Feeling wonderful 🌸 and ready to chat with you!",
        "I’m good, and always excited to talk about languages.",
      ];
      return replies[Math.floor(Math.random() * replies.length)];
    }
    if (msg.includes("time")) {
      return `Right now it's ${new Date().toLocaleTimeString()}.`;
    }
    if (msg.includes("joke")) {
      const jokes = [
        "Why did the linguist break up with the phonologist? They had too many unresolved diphthongs! 🤓",
        "A programmer and a linguist walk into a bar... the bartender says: 'Syntax error.' 😂",
      ];
      return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // --- Check if user mentioned a language name ---
    const found = languagesData.find((l) => msg.includes(l.name.toLowerCase()));
    if (found) {
      return `${found.name} is **${found.status}**, spoken in ${found.region}, with about ${found.speakers.toLocaleString()} speakers left.`;
    }

    // --- Fallbacks ---
    const fallbacks = [
      "Hmm, that's a tough one 🤔. Try asking about a language, UNESCO, or even math and science!",
      "Interesting question! Can you clarify it a bit?",
      "I might not know that exactly, but I can tell you about languages, culture, or history.",
      "Great question! Let's think about it together 🌟",
    ];
    return fallbacks[Math.floor(Math.random() * fallbacks.length)];
  }

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botReply = getBotResponse(input);
    setMessages((prev) => [...prev, { from: "bot", text: botReply }]);

    setInput("");
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 max-w-2xl mx-auto mt-12">
      <h2 className="text-2xl text-indigo-700 font-bold mb-4 text-center">
        LinguaViva AI Assistant
      </h2>
      <div className="h-64 overflow-y-auto bg-gray-50 p-4 rounded-lg flex flex-col gap-2">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg whitespace-pre-line ${
              m.from === "bot" ? "bg-indigo-100 self-start" : "bg-purple-200 self-end"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>
      <div className="flex mt-4 gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 p-2 rounded-lg bg-gray-100 text-gray-800 focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-indigo-600 text-white px-4 rounded-lg hover:bg-indigo-500 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
}
