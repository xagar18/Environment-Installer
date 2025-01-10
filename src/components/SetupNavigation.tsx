import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SetupNavigationProps {
  currentStep: number;
  canProceed: () => boolean;
  prevStep: () => void;
  nextStep: () => void;
}

export const SetupNavigation = ({
  currentStep,
  canProceed,
  prevStep,
  nextStep,
}: SetupNavigationProps) => {
  return (
    <div className="flex justify-between pt-8">
      <Button
        variant="outline"
        onClick={prevStep}
        disabled={currentStep === 1}
        className="flex items-center gap-2"
      >
        <ChevronLeft className="w-4 h-4" /> Previous
      </Button>
      {currentStep < 3 && (
        <Button
          onClick={nextStep}
          disabled={!canProceed()}
          className="flex items-center gap-2"
        >
          Next <ChevronRight className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};