import { FaCircleCheck } from "react-icons/fa6";
import toast, { Toaster } from "react-hot-toast";
import { FormData } from "../../types";
import { Button } from "../ui/button";
type Props = { formData: FormData };

const notify = () => toast("Thank you for assessing my Submission!");

const Completion = ({ formData }: Props) => {
  return (
    <div className="flex md:w-[30%] w-[85%] items-center justify-center flex-col gap-6">
      <FaCircleCheck size={50} color="#664DE5" />
      <div>
        <h1 className="text-2xl text-center md:text-4xl tracking-tight font-semibold mb-3">
          Congratulations, <span className="capitalize">{formData.name}</span>!
        </h1>
        <p className="text-center font-light text-slate-400 text-sm">
          You have completed onboarding, You can start using the Eden!
        </p>
      </div>
      <Button type="button" onClick={notify}>
        Launch Eden
      </Button>
      <Toaster />
    </div>
  );
};

export default Completion;
