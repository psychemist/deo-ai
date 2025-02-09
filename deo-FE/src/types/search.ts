import type React from "react";

export interface SearchSection {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  iconColor: string;
}

export interface SearchInputProps {
  onSearch: (query: string) => void;
  onSectionChange: (section: string) => void;
}

export interface SearchSectionProps {
  section: SearchSection;
  onClick: () => void;
}
