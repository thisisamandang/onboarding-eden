import React, { useState } from "react";
import { FormData } from "../types";
import { FaLeaf } from "react-icons/fa";

import InfoForm from "../components/form/InfoForm";
import WorkplaceInfo from "../components/form/WorkplaceInfo";
import PurposeInfo from "../components/form/PurposeInfo";
import Completion from "../components/form/Completion";
import Stepper from "../components/Steppers";

const Onboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    purpose: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen font-inter">
      <div className="flex gap-2 mb-10 items-center justify-center">
        <FaLeaf size={30} color="#664DE5" />
        <h1 className="font-bold text-4xl ">Eden</h1>
      </div>

      <Stepper steps={4} currentStep={currentStep} />
      {currentStep === 1 && (
        <InfoForm
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {currentStep === 2 && (
        <WorkplaceInfo
          formData={formData}
          handleChange={handleChange}
          nextStep={nextStep}
        />
      )}

      {currentStep === 3 && (
        <PurposeInfo
          setFormData={setFormData}
          nextStep={nextStep}
          formData={formData}
        />
      )}

      {currentStep === 4 && <Completion formData={formData} />}
    </div>
  );
};

export default Onboarding;
