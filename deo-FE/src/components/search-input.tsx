"use client";

import { useState } from "react";
import { Globe } from "lucide-react";
import { SearchInputProps } from "@/types/search";

export function SearchInput({ onSearch, onSectionChange }: SearchInputProps) {
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ask anything..."
        className="w-full bg-zinc-900 rounded-sm px-4 py-3 pr-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="absolute right-2 top-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onSectionChange("all")}
          className="bg-zinc-800 text-sm px-3 py-1 flex items-center gap-2 rounded-sm"
        >
          <Globe className="w-4 h-4" />
          All of DeoAI
        </button>
      </div>
    </form>
  );
}
