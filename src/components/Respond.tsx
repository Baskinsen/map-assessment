import { useState } from "react";
import { RequestQuote } from "./RequestQuote";
import TermsAndAttachements from "./TermsAndAttachements";
import RequestInformation from "./RequestInformation";
import StepIndicator, { Step } from "./StepIndicator";
import { quoteDetail} from "../assets/data";

export default function Respond() {
  const [step, setStep] = useState<number>(1);
  const [steps, setSteps] = useState<Step[]>([
    {
      stepNumber: 1,
      label: "Request Information",
      info: "Provide details about the RFQ",
      isActive: true,
      completed: false,
    },
    {
      stepNumber: 2,
      label: "Terms and Attachments",
      info: "Payment and delivery terms",
      isActive: false,
      completed: false,
    },
    {
      stepNumber: 3,
      label: "Review",
      info: "Confirm all information provided",
      isActive: false,
      completed: false,
    },
  ]);

  const handleStepChange = (newStep: number) => {
    setSteps((prevSteps) =>
      prevSteps.map((step) => {
        if (step.stepNumber === newStep) {
          return { ...step, isActive: true, completed: false };
        } else if (step.stepNumber === newStep - 1) {
          return { ...step, isActive: false, completed: true };
        } else {
          return { ...step, isActive: false };
        }
      })
    );
    setStep(newStep);
    window?.top?.scrollTo(0, 0);
  };

  return (
    <div className="w-full px-5 xl:px-10 py-10 space-y-8">
      <h1 className="text-[#667185] text-[14px] font-medium">
        <span className="text-[#175CFF]">Quotes</span> / Quote Response
      </h1>
      <StepIndicator steps={steps}  />
      {step === 1 && (
        <RequestQuote
          quoteDetail={quoteDetail}
          
          handleStepChange={handleStepChange}
        />
      )}
      {step === 2 && (
        <TermsAndAttachements
         
          handleStepChange={handleStepChange}
        />
      )}
      {step === 3 && (
        <RequestInformation
          quoteInformation={quoteDetail.quoteInformation}
          quoteItems={quoteDetail.items}
          total={quoteDetail.totals}
        />
      )}
    </div>
  );
}
