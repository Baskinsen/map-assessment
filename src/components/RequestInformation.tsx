import { useState, CSSProperties } from "react";
import Edit from "../assets/edit.png";
import { QuoteDetails } from "../assets/data";
import QuoteItems from "./QuoteItems";
import TermsImg from "../assets/sign-doc-2.png";
import ArrowUp from "../assets/Arrowup.png";
import ConfirmationModal from "./ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import ToastSuccess from "../assets/toast-success.png";
import Multiply from "../assets/multiply.png";

interface RequestInformationProps {
  quoteInformation: QuoteDetails["quoteInformation"];
  quoteItems: QuoteDetails["items"];
  total: QuoteDetails["totals"];
}

const override: CSSProperties = {
  borderWidth: "5px",
};

export default function RequestInformation({
  quoteItems,
  total,
  quoteInformation,
}: RequestInformationProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsModalOpen(true);
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    // Simulate an API call
    setIsModalOpen(false);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);

    toast(Toast, {
      position: "top-right",
      hideProgressBar: true,
      closeButton: false,
      className: "p-0 border-l-[10px] border-[#04802E] flex items-center justify-center",
      closeOnClick: true
    });
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="border-[1px] border-[#E4E7EC] rounded-xl py-5 px-5 xl:px-10 space-y-8">
        <div className="flex justify-between space-y-2">
          <h2 className="text-[#1A1A21] text-[24px] font-bold">
            Request Information
          </h2>
          <img src={Edit} alt="" className="w-5 h-5" />
        </div>
        <div className="w-full lg:w-[60%] flex flex-col gap-5">
          <div className="flex justify-between">
            <h3 className="text-[#555E68] text-[16px] font-medium">Title</h3>
            <p className="text-[#101928] text-[16px] font-medium">
              {quoteInformation.title}
            </p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#555E68] text-[16px] font-medium">RFQ No</h3>
            <p className="text-[#101928] text-[16px] font-medium">
              {quoteInformation.rfqNo}
            </p>
          </div>
          <div className="flex justify-between">
            <h3>Requestor</h3>
            <p className="flex space-x-2 items-center ">
              <span className="bg-[#FFECE5] text-[#101928] text-[14px] font-bold rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
                {quoteInformation.requestor.name
                  .split(" ")
                  .map((word) => word[0]?.toUpperCase())
                  .join("")}
              </span>
              <span className="text-[#344054] text-[16px] font-medium">
                {quoteInformation.requestor.name}
              </span>
              <span className="w-[6px] h-[6px] bg-[#D9D9D9] rounded-full"></span>
              <span className="text-[#98A2B3] text-[16px] font-medium">
                {quoteInformation.requestor.role}
              </span>
            </p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#555E68] text-[16px] font-medium">Status</h3>
            <p>{quoteInformation.status}</p>
          </div>
          <div className="flex justify-between">
            <h3 className="text-[#555E68] text-[16px] font-medium">
              Department
            </h3>
            <p className="text-[#101928] text-[16px] font-medium">
              {quoteInformation.department}
            </p>
          </div>
        </div>
      </div>
      <QuoteItems quoteItems={quoteItems} totals={total} />
      <div className="flex justify-between border-[1px] border-[#E4E7EC] rounded-xl py-5 px-10">
        <div className="flex gap-2">
          <img src={TermsImg} alt="" className="h-10 w-10" />
          <div>
            <h2 className="text-[#1D2739] text-[20px] font-bold ">
              Terms And Attachments
            </h2>
            <p className="text-[#475367] text-[14px] font-[400]">
              Review payment and delivery terms
            </p>
          </div>
        </div>
        <img
          src={ArrowUp}
          alt=""
          className="transform rotate-180 w-6 h-6 my-auto"
        />
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
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
      />

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="flex items-center justify-center bg-white rounded-lg p-5 w-[20%] h-[20%]">
            <div className="flex flex-col items-center gap-2">
              <ClipLoader color="#175CFF" cssOverride={override} />
              <span className="ml-2 text-[#000000] text-[14px] font-medium">
                Sending Quote...
              </span>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

const Toast = () => {
  return (
    <div className="rounded-md w-full h-full">
      <div className="flex justify-between items-center w-full px-2">
        <div className="flex items-center justify-between gap-2">
          <img src={ToastSuccess} alt="" className="w-5 h-5" />
          <h2 className="text-[14px] text-[#101928] font-bold my-auto">
            RFQ ID sent successfully!
          </h2>
        </div>
        <img
          src={Multiply}
          alt=""
          className="h-5 w-5 my-auto"
          style={{
            filter:
              "invert(100%) sepia(10%) saturate(1430%) hue-rotate(170deg) brightness(90%) contrast(80%)",
          }}
        />
      </div>
    </div>
  );
};
