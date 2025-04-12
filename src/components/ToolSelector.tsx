import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface Tool {
  id: string;
  name: string;
  description: string;
  category: string;
  versions?: string[];
}

interface ToolSelectorProps {
  tools: Tool[];
  selectedTools: string[];
  onToggle: (toolId: string) => void;
}

export const ToolSelector = ({
  tools,
  selectedTools,
  onToggle,
}: ToolSelectorProps) => {
  const categories = Array.from(new Set(tools.map((tool) => tool.category)));

  return (
    <div className="space-y-8 w-full max-w-4xl mx-auto animate-fade-up">
      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h3 className="text-lg font-semibold">{category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tools
              .filter((tool) => tool.category === category)
              .map((tool) => (
                <Card
                  key={tool.id}
                  className={cn(
                    "p-6 cursor-pointer transition-all duration-300",
                    "border-2",
                    selectedTools.includes(tool.id)
                      ? "border-primary bg-primary/5"
                      : "border-transparent hover:border-primary/20"
                  )}
                  onClick={() => onToggle(tool.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium">{tool.name}</h4>
                        {selectedTools.includes(tool.id) && (
                          <Check className="w-4 h-4 text-primary" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {tool.description}
                      </p>
                      {tool.versions && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {tool.versions.map((version) => (
                            <Badge
                              key={version}
                              variant="secondary"
                              className="text-xs"
                            >
                              {version}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};