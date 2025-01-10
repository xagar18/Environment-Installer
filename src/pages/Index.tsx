import { useState } from "react";
import { OSSelector } from "@/components/OSSelector";
import { ToolSelector } from "@/components/ToolSelector";
import { ScriptOutput } from "@/components/ScriptOutput";
import { tools } from "@/lib/tools";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SetupHeader } from "@/components/SetupHeader";
import { SetupProgress } from "@/components/SetupProgress";
import { SetupNavigation } from "@/components/SetupNavigation";
import { CustomToolDialog } from "@/components/CustomToolDialog";

const Index = () => {
  const [selectedOS, setSelectedOS] = useState("");
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [customTools, setCustomTools] = useState([]);

  const toggleTool = (toolId: string) => {
    setSelectedTools((prev) =>
      prev.includes(toolId)
        ? prev.filter((id) => id !== toolId)
        : [...prev, toolId]
    );
  };

  const generateScript = () => {
    if (!selectedOS || selectedTools.length === 0) return "";

    const allTools = [...tools, ...customTools];
    const selectedToolsData = allTools.filter((tool) =>
      selectedTools.includes(tool.id)
    );
    const commands = selectedToolsData
      .map((tool) => tool.commands[selectedOS as keyof typeof tool.commands])
      .filter(Boolean);

    return commands.join("\n");
  };

  const getProgress = () => {
    switch (currentStep) {
      case 1:
        return selectedOS ? 33 : 0;
      case 2:
        return selectedTools.length > 0 ? 66 : 33;
      case 3:
        return 100;
      default:
        return 0;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!selectedOS;
      case 2:
        return selectedTools.length > 0;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (currentStep < 3 && canProceed()) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <div className="container py-8 space-y-12 flex-1">
        <SetupHeader />

        <div className="w-full max-w-4xl mx-auto space-y-8">
          <SetupProgress currentStep={currentStep} getProgress={getProgress} />

          <div className="space-y-8">
            {currentStep === 1 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-center">
                  Choose Your Operating System
                </h2>
                <OSSelector selectedOS={selectedOS} onSelect={setSelectedOS} />
              </section>
            )}

            {currentStep === 2 && (
              <section className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">
                    Select Development Tools
                  </h2>
                  <CustomToolDialog
                    selectedOS={selectedOS}
                    onAddTool={(tool) => {
                      setCustomTools((prev) => [...prev, tool]);
                    }}
                  />
                </div>
                <ToolSelector
                  tools={[...tools, ...customTools]}
                  selectedTools={selectedTools}
                  onToggle={toggleTool}
                />
              </section>
            )}

            {currentStep === 3 && (
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-center">
                  Your Installation Script
                </h2>
                <ScriptOutput script={generateScript()} />
              </section>
            )}

            <SetupNavigation
              currentStep={currentStep}
              canProceed={canProceed}
              prevStep={prevStep}
              nextStep={nextStep}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;