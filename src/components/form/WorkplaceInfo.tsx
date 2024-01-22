import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormData } from "../../types";
import { Label } from "../ui/label";

type Props = {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
};

const WorkplaceInfo = ({ formData, handleChange, nextStep }: Props) => {
  return (
    <>
      <div>
        <h1 className="text-2xl md:text-4xl tracking-tight font-semibold mb-3 font-inter">
          Let&apos;s setup a home for all your work
        </h1>
        <p className="text-center font-light text-slate-400 text-sm">
          You can always create another workspace later
        </p>
      </div>
      <div className="md:w-[30%] w-[80%]">
        <Label>Workspace Name</Label>
        <Input
          type="text"
          name="workspaceName"
          value={formData.workspaceName}
          onChange={handleChange}
          className="w-full border p-2 mb-4"
        />

        <Label>
          Workspace URL <span className="text-slate-400">(Optional)</span>
        </Label>
        <div className="flex">
          <Input
            disabled
            value="www.eden.com/"
            className="md:1/2 bg-[#F8F9FC] rounded-r-none disabled:pointer-events-none"
          />
          <Input
            type="text"
            name="workspaceUrl"
            value={formData.workspaceUrl}
            onChange={handleChange}
            className="w-full border rounded-l-none p-2 mb-4"
          />
        </div>

        <Button onClick={nextStep}>Create Workspace</Button>
      </div>
    </>
  );
};

export default WorkplaceInfo;
