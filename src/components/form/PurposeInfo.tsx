import React from "react";
import { FormData } from "../../types";
import { Button } from "../ui/button";
import { BsPersonFill, BsPeopleFill } from "react-icons/bs";

type Props = {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  nextStep: () => void;
  formData: FormData;
};

const PurposeInfo: React.FC<Props> = ({ formData, setFormData, nextStep }) => {
  const handlePurposeClick = (selectedPurpose: string) => {
    setFormData((prevData: FormData) => ({
      ...prevData,
      purpose: selectedPurpose,
    }));
  };

  return (
    <>
      <div>
        <h1 className="text-2xl md:text-4xl text-center tracking-tight font-semibold font-inter mb-3">
          How are you planning to use Eden?
        </h1>
        <p className="text-center font-light text-slate-400 text-sm">
          We&apos;ll streamline your setup experience accordingly
        </p>
      </div>
      <div className="md:w-[35%] w-[85%]">
        <div className="flex items-center justify-center mb-4">
          <div
            className={`${
              formData.purpose === "individual"
                ? "border-[#664DE5]"
                : "border-slate-200"
            } border p-4 rounded-md mr-2 md:mr-4 cursor-pointer`}
            onClick={() => handlePurposeClick("individual")}
          >
            <BsPersonFill
              size={20}
              color={`${formData.purpose === "individual" ? "#664DE5" : ""}`}
            />
            <h3 className="md:text-md  text-sm font-bold my-2">For Myself</h3>
            <p className="text-xs text-slate-400 md:text:sm">
              Write better. Think more clearly. Stay organized.
            </p>
          </div>
          <div
            className={`${
              formData.purpose === "team"
                ? "border-[#664DE5]"
                : "border-slate-200"
            }  p-4  rounded-md cursor-pointer  border`}
            onClick={() => handlePurposeClick("team")}
          >
            <BsPeopleFill
              size={20}
              color={`${formData.purpose === "team" ? "#664DE5" : ""}`}
            />
            <h3 className="md:text-md text-sm font-bold my-2">With my team</h3>
            <p className="text-xs text-slate-400 md:text:sm">
              Wikis, docs, tasks & projects, all in one place.
            </p>
          </div>
        </div>
        <Button type="button" onClick={nextStep}>
          Create Workspace
        </Button>
      </div>
    </>
  );
};

export default PurposeInfo;
