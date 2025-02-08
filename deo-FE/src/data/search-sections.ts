import { Globe, BookOpen, FileText, Factory } from "lucide-react";
import { SearchSection } from "@/types/search";

export const searchSections: SearchSection[] = [
  {
    id: "all",
    title: "All of DeoAI",
    description: "Search in the entire DeoAI Ecosystem",
    icon: Globe,
    iconColor: "text-blue-400",
  },
  {
    id: "book",
    title: "DeoAI Book",
    description: "Search in DeoAI Book",
    icon: BookOpen,
    iconColor: "text-purple-400",
  },
  {
    id: "docs",
    title: "DeoAI Docs",
    description: "Search in DeoAI Docs",
    icon: FileText,
    iconColor: "text-green-400",
  },
  {
    id: "foundry",
    title: "DeoAI Foundry",
    description: "Search in DeoAI Foundry",
    icon: Factory,
    iconColor: "text-orange-400",
  },
];
