"use client";

import dynamic from "next/dynamic";
import data from "@/data/languages.json";

const MapView = dynamic(() => import("@/components/MapView"), { ssr: false });

export default function MapPage() {
  return (
    <main className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold mb-4">Global Map</h2>
      <MapView items={data} />
    </main>
  );
}
