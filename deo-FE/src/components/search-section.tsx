import type { SearchSectionProps } from "@/types/search";

export function SearchSection({ section, onClick }: SearchSectionProps) {
  const Icon = section.icon;

  return (
    <button
      onClick={onClick}
      className="bg-zinc-900 p-4 rounded-lg text-left hover:bg-zinc-800 transition-colors"
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon className={`w-5 h-5 ${section.iconColor}`} />
        <span className="font-medium">{section.title}</span>
      </div>
      <p className="text-sm text-gray-400">{section.description}</p>
    </button>
  );
}
