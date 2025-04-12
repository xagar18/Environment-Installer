import { Monitor, Apple, Terminal } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface OSSelectorProps {
  selectedOS: string;
  onSelect: (os: string) => void;
}

export const OSSelector = ({ selectedOS, onSelect }: OSSelectorProps) => {
  const osOptions = [
    { id: "windows", name: "Windows", icon: Monitor },
    { id: "macos", name: "macOS", icon: Apple },
    { id: "linux", name: "Linux", icon: Terminal },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-3xl mx-auto animate-fade-up">
      {osOptions.map(({ id, name, icon: Icon }) => (
        <Card
          key={id}
          className={cn(
            "p-6 cursor-pointer transition-all duration-300 hover:scale-105",
            "border-2",
            selectedOS === id
              ? "border-primary bg-primary/5"
              : "border-transparent hover:border-primary/20"
          )}
          onClick={() => onSelect(id)}
        >
          <div className="flex flex-col items-center space-y-4">
            <Icon className="w-12 h-12" />
            <span className="font-medium">{name}</span>
          </div>
        </Card>
      ))}
    </div>
  );
};