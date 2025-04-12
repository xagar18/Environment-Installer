import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface ScriptOutputProps {
  script: string;
}

export const ScriptOutput = ({ script }: ScriptOutputProps) => {
  const { toast } = useToast();

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(script);
      toast({
        title: "Copied to clipboard",
        description: "The installation script has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 animate-fade-up">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Installation Script</h3>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={copyToClipboard}
        >
          <Copy className="w-4 h-4" />
          Copy
        </Button>
      </div>
      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
        <code className="text-sm">{script}</code>
      </pre>
    </Card>
  );
};