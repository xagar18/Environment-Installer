import { Progress } from "@/components/ui/progress";

interface SetupProgressProps {
  currentStep: number;
  getProgress: () => number;
}

export const SetupProgress = ({ currentStep, getProgress }: SetupProgressProps) => {
  return (
    <div className="space-y-2">
      <Progress value={getProgress()} className="h-2" />
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>Step {currentStep} of 3</span>
        <span>{getProgress()}% Complete</span>
      </div>
    </div>
  );
};