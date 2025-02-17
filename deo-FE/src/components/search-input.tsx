"use client";

import React from "react";
import { useState, useRef, useEffect } from "react";
import { Globe, BookOpen, FileText, Factory, ArrowRight } from "lucide-react";
import type { SearchInputProps } from "@/types/search";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function SearchInput({ onSearch, onSectionChange }: SearchInputProps) {
  const [query, setQuery] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [textareaHeight, setTextareaHeight] = useState<number>(120);

  const sections = [
    {
      id: "all",
      title: "ENS Smart Contracts",
      desc: "Search in the entire DeoAI Ecosystem",
      icon: Globe,
    },
    {
      id: "book",
      title: "ENS Tools and Libraries",
      desc: "Search in DeoAI Book",
      icon: BookOpen,
    },
    {
      id: "docs",
      title: "Thorin",
      desc: "Search in DeoAI Docs",
      icon: FileText,
    },
    {
      id: "foundry",
      title: "ENSIP",
      desc: "Search in DeoAI Foundry",
      icon: Factory,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  const updateTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      setTextareaHeight(textareaRef.current.scrollHeight);
    }
  };

  useEffect(() => {
    updateTextareaHeight();
  }, [textareaHeight]); // Corrected dependency

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
      setQuery((prev) => prev + "\n");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
    updateTextareaHeight();
  };

  return (
    <div className="relative w-full">
      <div className="bg-zinc-900 rounded-xl p-2">
        <form onSubmit={handleSubmit} className="relative">
          <div
            className="relative"
            style={{ minHeight: `${Math.max(120, textareaHeight + 60)}px` }}
          >
            <Textarea
              ref={textareaRef}
              value={query}
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything..."
              className="w-full bg-transparent pl-4 pr-4 pt-8 pb-20 text-white text-lg resize-none border-none overflow-hidden focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none"
              style={{ height: `${textareaHeight}px` }}
            />
            <div className="absolute top-2 right-4 flex items-center gap-3"></div>
            <div
              className="absolute left-3 bg-zinc-900 pt-2"
              style={{ bottom: "12px" }}
            >
              <Select onValueChange={onSectionChange}>
                <SelectTrigger className="w-[160px] bg-transparent border-none text-zinc-300">
                  <SelectValue placeholder="All of DeoAI" />
                </SelectTrigger>
                <SelectContent className="bg-zinc-900 border-zinc-800">
                  <SelectGroup>
                    <SelectLabel>Search Options</SelectLabel>
                    {sections.map((item) => (
                      <SelectItem
                        key={item.id}
                        value={item.id}
                        className="focus:bg-zinc-800 focus:text-white"
                      >
                        <div className="flex items-center gap-2">
                          <item.icon
                            className={`h-5 w-5 ${item || "text-zinc-400"}`}
                          />
                          <span className="font-medium">{item.title}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <button
              type="submit"
              className="absolute right-3 bg-zinc-800 p-2 rounded-lg hover:bg-zinc-700 transition-colors"
              style={{ bottom: "12px" }}
            >
              <ArrowRight className="h-4 w-4 text-zinc-400" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
