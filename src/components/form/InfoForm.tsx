import React from "react";
import { Input } from "../ui/input";
import { FormData } from "../../types";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

type Props = {
  formData: FormData;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  nextStep: () => void;
};

const InfoForm = ({ formData, handleChange, nextStep }: Props) => {
  return (
    <>
      <div>
        <h1 className="text-2xl md:text-4xl tracking-tight font-semibold mb-3">
          Welcome! First things first...
        </h1>
        <p className="text-center font-light text-slate-400 text-sm">
          You can always change them later.
        </p>
      </div>
      <div className="md:w-[30%] w-[80%]">
        <Label>Full Name</Label>
        <Input
          type="text"
          name="name"
          placeholder="Steve Jobs"
          required
          value={formData.name}
          onChange={handleChange}
          className="p-2 mb-4"
        />

        <Label>Display Name</Label>
        <Input
          type="text"
          name="displayName"
          placeholder="Steve"
          required
          value={formData.displayName}
          onChange={handleChange}
          className="p-2 mb-4"
        />

        <Button type="button" onClick={nextStep}>
          Create Workspace
        </Button>
      </div>
    </>
  );
};

export default InfoForm;
