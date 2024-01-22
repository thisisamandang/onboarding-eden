import React from "react";

interface StepperProps {
  steps: number;
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center mb-8 md:mb-10">
      {[...Array(steps)].map((_, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div className="flex">
              <div
                className={`h-[1px] w-6 flex-1 ${
                  index - 1 < currentStep ? "bg-[#664DE5]" : "bg-gray-400"
                }`}
              ></div>
              <div
                className={`h- w-6 flex-1 ${
                  index < currentStep ? "bg-[#664DE5]" : "bg-slate-400"
                }`}
              ></div>
            </div>
          )}
          <div
            className={`w-8 h-8 flex text-sm items-center justify-center rounded-full transition-all duration-150 ${
              index + 1 === currentStep
                ? "bg-[#664DE5] text-white"
                : index + 1 < currentStep
                ? "bg-[#664DE5] text-white"
                : "border"
            }`}
          >
            {index + 1}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
