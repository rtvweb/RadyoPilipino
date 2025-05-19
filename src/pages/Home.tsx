// src/pages/Home.tsx
import { Hero, Stations, Staff, CTA } from "../components/ui/Home";
import { stations, staffMembers } from "../data/homeData";
import { useState } from "react";


export default function Home() {
  const [activeTab, setActiveTab] = useState<"all"|"AM"|"FM"|"TV">("all");

  return (
    <main className="min-h-screen">
      <Hero onSelectTab={setActiveTab} />

      <Stations
        stations={stations}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Staff members={staffMembers} />

      <CTA />
    </main>
  );
}
