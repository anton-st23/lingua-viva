"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import LanguageChatBot from "@/components/LanguageChatBot";

// 🔥 Динамический импорт MapContainer с отключением SSR
const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then(mod => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import("react-leaflet").then(mod => mod.Popup),
  { ssr: false }
);

import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function HomePage() {
  const [mapItems, setMapItems] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // включаем клиентский рендер
    import("@/data/languages.json").then((data) => {
      const items = data.default || data;
      const uniqueItems = Array.from(new Map(items.map(it => [it.slug, it])).values());
      const validItems = uniqueItems.filter(
        it =>
          it.coordinates &&
          Array.isArray(it.coordinates) &&
          it.coordinates.length === 2 &&
          typeof it.coordinates[0] === "number" &&
          typeof it.coordinates[1] === "number"
      );
      setMapItems(validItems);
    });
  }, []);

  if (!isClient) return <p className="text-center p-10">Loading map...</p>;

  const totalLanguages = mapItems.length;
  const criticallyEndangered = mapItems.filter(it => it.status.toLowerCase().includes("critically")).length;
  const endangered = mapItems.filter(it => it.status.toLowerCase().includes("endangered") && !it.status.toLowerCase().includes("critically")).length;
  const vulnerable = mapItems.filter(it => it.status.toLowerCase().includes("vulnerable")).length;
  const safe = mapItems.filter(it => it.status.toLowerCase().includes("safe")).length;
  const totalSpeakers = mapItems.reduce((sum, it) => sum + (it.speakers || 0), 0);

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen">
      <section>
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ width: "100%", height: "80vh" }}
          scrollWheelZoom
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {mapItems.map((it, index) => (
            <Marker
              key={`${it.slug}-${index}`}
              position={it.coordinates}
              icon={markerIcon}
            >
              <Popup>
                <strong>{it.name}</strong>
                <div className="text-xs">{it.region}</div>
                <div className="text-xs">Speakers: {it.speakers?.toLocaleString() || "N/A"}</div>
                <div className="text-xs">Status: {it.status}</div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </section>

      <section className="py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-400">Why It Matters</h2>
          <p className="text-gray-300 mb-10">
            More than <strong>40% of the world’s languages</strong> are at risk of extinction.
            Our mission is to preserve this invaluable cultural heritage.
          </p>

          <div className="grid md:grid-cols-5 gap-6 mt-8 text-gray-100">
            <div className="p-6 bg-gray-700 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-indigo-300">{totalLanguages}</h3>
              <p>Total Languages</p>
            </div>
            <div className="p-6 bg-red-700 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-red-300">{criticallyEndangered}</h3>
              <p>Critically Endangered</p>
            </div>
            <div className="p-6 bg-orange-700 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-orange-300">{endangered}</h3>
              <p>Endangered</p>
            </div>
            <div className="p-6 bg-yellow-700 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-yellow-300">{vulnerable}</h3>
              <p>Vulnerable</p>
            </div>
            <div className="p-6 bg-green-700 rounded-2xl shadow">
              <h3 className="text-xl font-bold text-green-300">{safe}</h3>
              <p>Safe Languages</p>
            </div>
          </div>

          <div className="mt-8 text-gray-300">
            <p>Total speakers of all mapped languages: <strong>{totalSpeakers.toLocaleString()}</strong></p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-indigo-400">
            Chat with our AI Assistant
          </h2>
          <LanguageChatBot />
        </div>
      </section>
    </div>
  );
}
