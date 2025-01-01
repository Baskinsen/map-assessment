import React from "react";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-5 md:w-1/2 w-full xl:w-1/3">
        <h2 className="text-[#101928] text-[20px] font-bold">Confirmation</h2>
        <p className="mt-2 text-[#475367] text-[14px] font-medium">
          You are about to submit this quote in response to RFQ ID. This will
          immediately be sent to the client “Westend Clear Hospital”. Are you
          sure you want to proceed?
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="mr-2 px-4 py-2 bg-[#ffffff] border-[1px] border-[#D0D5DD] rounded-lg text-[14px] text-[#344054] font-bold"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#175CFF] text-white rounded-lg text-[14px] text-[#FFFFFF] font-bold"
            onClick={onConfirm}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
