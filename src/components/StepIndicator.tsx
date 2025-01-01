

export interface Step {
  stepNumber: number;
  label: string;
  info: string;
  isActive: boolean;
  completed: boolean;
}

interface StepIndicatorProps {
  steps: Step[];
}

const StepIndicator = ({ steps }: StepIndicatorProps) => {
  return (
    <div className="flex justify-between items-center bg-white p-5 border-[1px] border-[#E4E7EC] rounded-md mb-6">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center gap-2">
          <div
            className={`w-8 h-8 flex items-center justify-center rounded-full  font-bold ${
              step.isActive
                ? "bg-blue-500 text-white"
                : step.completed
                ? "bg-[#E7F6EC] text-[#0F973D]"
                : "bg-[#ffffff] border-[1px] border-[#98A2B3] text-[#98A2B3]"
            }`}
          >
            {step.stepNumber}
          </div>
          <div>
            <h2
              className={`text-[16px]   ${
                step.isActive
                  ? "text-[#101928] font-bold"
                  : step.completed
                  ? "text-[#101928] font-bold"
                  : "text-[#101928] font-medium"
              }`}
            >
              {step.label}
            </h2>
            <p
              className={`text-[12px] ${
                step.isActive
                  ? "text-[#475367]"
                  : step.completed
                  ? "text-[#475367]"
                  : "text-[#667185]"
              }`}
            >
              {step.info}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
