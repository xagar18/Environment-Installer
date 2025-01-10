import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";

interface CustomToolDialogProps {
  selectedOS: string;
  onAddTool: (tool: any) => void;
}

export const CustomToolDialog = ({ selectedOS, onAddTool }: CustomToolDialogProps) => {
  const [newTool, setNewTool] = useState({
    name: "",
    description: "",
    command: "",
  });

  const handleAddCustomTool = () => {
    const customTool = {
      id: `custom-${Date.now()}`,
      name: newTool.name,
      description: newTool.description,
      category: "Custom Tools",
      commands: {
        [selectedOS]: newTool.command,
      },
    };
    onAddTool(customTool);
    setNewTool({ name: "", description: "", command: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Add Custom Tool
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Custom Tool</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Tool Name</Label>
            <Input
              id="name"
              value={newTool.name}
              onChange={(e) =>
                setNewTool((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={newTool.description}
              onChange={(e) =>
                setNewTool((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="command">Installation Command</Label>
            <Input
              id="command"
              value={newTool.command}
              onChange={(e) =>
                setNewTool((prev) => ({
                  ...prev,
                  command: e.target.value,
                }))
              }
            />
          </div>
          <Button onClick={handleAddCustomTool}>Add Tool</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};