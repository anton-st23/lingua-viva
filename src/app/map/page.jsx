'use client';
import MapView from "@/components/MapView";
import data from "@/data/languages.json";

export default function MapPage() {
  return (
    <main className="space-y-6">
      <h2 className="text-2xl font-semibold">Global Map</h2>
      <MapView items={data} />
    </main>
  );
}
