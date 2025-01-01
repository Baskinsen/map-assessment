import { useState } from "react";
import CustomSelect from "./CustomSelect";
import ImageUpload from "./ImageUpload";


interface Props {
  handleStepChange: (newStep: number) => void;
}

export default function TermsAndAttachements({
  handleStepChange,
}: Props) {
  const [imageFile, setImageFile] = useState<File | null>(null);

  return (
    <div className="border-[1px] border-[#D0D5DD] rounded-md p-5 space-y-8">
      <div>
        <h2 className="text-[#1A1A21] text-[24px] font-bold ">
          Terms and Conditions
        </h2>
        <p className="text-[#98A2B3] text-[16px] font-[400]">
          Provide detailed information on payment and delivery terms
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="payment"
            className="text-[#475367] text-[14px] font-bold"
          >
            Payment Terms
          </label>
          <CustomSelect
            options={[
              {
                value: "Net 30",
                label: "Net 30",
              },
            ]}
            placeholder={"Net 30"}
            onChange={() => console.log("item")}
            className="bg-[#FFFFFF] text-[#98A2B3] tex-[12px]"
          />
        </div>
        <div>
          <label
            htmlFor="delivery"
            className="text-[#475367] text-[14px] font-bold"
          >
            Delivery Schedule
          </label>
          <CustomSelect
            options={[
              {
                value: "Immediate delivery",
                label: "Immediate delivery",
              },
            ]}
            placeholder={"Immediate delivery"}
            onChange={() => console.log("item")}
            className="bg-[#FFFFFF] text-[#98A2B3] tex-[12px]"
          />
        </div>
        <div>
          <label
            htmlFor="shipping"
            className="text-[#475367] text-[14px] font-bold"
          >
            Shipping Method
          </label>
          <CustomSelect
            options={[
              {
                value: "Courier Services",
                label: "Courier Services",
              },
            ]}
            placeholder={"Courier Services"}
            onChange={() => console.log("item")}
            className="bg-[#FFFFFF] text-[#98A2B3] tex-[12px]"
          />
        </div>
        <div>
          <label
            htmlFor="lead"
            className="text-[#475367] text-[14px] font-bold"
          >
            Lead Time
          </label>
          <CustomSelect
            options={[
              {
                value: "10",
                label: "10",
              },
            ]}
            placeholder={"10"}
            onChange={() => console.log("item")}
            className="bg-[#FFFFFF] text-[#98A2B3] tex-[12px]"
          />
        </div>
      </div>
      <div className="border-t border-[#D0D5DD] py-5 w-[50%] space-y-4">
        <div>
          <h3 className="text-[#1D2739] text-[16px] font-bold">Attachments</h3>
          <p className="text-[#98A2B3] text-[14px] font-[400]">
            Attach all necessary files or documents
          </p>
        </div>
        <ImageUpload imageFile={imageFile} setImageFile={setImageFile} />
      </div>
      <div className="flex justify-end space-x-4 border-t border-[#D0D5DD] py-5">
        <button className="text-[#475367] text-[14px] font-bold bg-[#FFFFFF] border-[1px] border-[#E4E7EC] px-2 py-2 rounded-md">
          Cancel
        </button>
        <button className="text-[#175CFF] text-[14px] font-bold bg-[#FFFFFF] border-[1px] border-[#175CFF] px-2 py-2 rounded-md w-[150px]">
          Save as draft
        </button>
        <button
          className="text-[#FFFFFF] text-[14px] font-bold bg-[#175CFF] border-[1px] border-[#175CFF] px-2 py-2 rounded-md w-[150px]"
          onClick={() => handleStepChange(3)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
