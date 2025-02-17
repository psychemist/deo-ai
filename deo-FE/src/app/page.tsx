"use client";

import { useState } from "react";
import Image from "next/image";
import { SearchInput } from "@/components/search-input";

export default function Home() {
  const [activeSection, setActiveSection] = useState<string>("all");

  const handleSearch = (query: string) => {
    console.log("Searching:", query, "in section:", activeSection);
  };

  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="p-4">
        <Image src="/logo1.png" alt="Logo" width={70} height={70} />
      </div>

      <main className="max-w-3xl mx-auto px-4 pt-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-lg text-gray-400">Welcome to the DeoAI</h2>
          <h1 className="text-3xl font-bold">
            Unlock The full Potential of ENS
          </h1>
        </div>

        <div className="space-y-4">
          <SearchInput
            onSearch={handleSearch}
            onSectionChange={handleSectionChange}
          />
        </div>
      </main>
    </div>
  );
}
