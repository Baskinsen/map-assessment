import { useState } from "react";
import { QuoteDetails } from "../assets/data";
import Multiply from "../assets/multiply.png";
import Calendar2 from "../assets/calendar-2.png";
import Bin from "../assets/bin.png";
import { truncateString } from "../utils";
import CustomSelect from "./CustomSelect";


interface RespondQuoteProps {
  quoteDetail: QuoteDetails;
  handleStepChange: (newStep: number) => void;
}
interface AddItemsTableProps {
  quoteDetail: QuoteDetails;
}

export const RequestQuote = ({quoteDetail, handleStepChange}: RespondQuoteProps) => {
  const [note, setNote] = useState("");

  return (
    <div className="border-[1px] border-[#E4E7EC] rounded-md p-5 space-y-8">
      <div className="space-y-2">
        <h2 className="text-[#1A1A21] text-[24px] font-bold">Request Quote</h2>
        <p className="text-[#98A2B3] text-[16px] font-[400]">
          Fill out these details to send the RFQ
        </p>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col space-y-2">
          <label
            className="text-[#475367] text-[14px] font-bold "
            htmlFor="RFQno"
          >
            RFQ No
          </label>
          <input
            type="text"
            name="RFQno"
            id="RFQno"
            value={quoteDetail.quoteInformation.rfqNo}
            disabled={true}
            className="border-[1px] border-[#D0D5DD] rounded-md text-[#98A2B3] text-[14px] bg-[#F0F2F5] px-3 py-3"
          />
        </div>
        <div className="flex flex-col space-y-2">
          {" "}
          <label
            className="text-[#475367] text-[14px] font-bold "
            htmlFor="TItle"
          >
            TItle
          </label>
          <input
            type="text"
            name="title"
            id="title"
            value={quoteDetail.quoteInformation.title}
            disabled={true}
            className="border-[1px] border-[#D0D5DD] rounded-md text-[#98A2B3] text-[14px] bg-[#F0F2F5] px-3 py-3"
          />
        </div>
        <div className="flex flex-col space-y-2">
          {" "}
          <label
            className="text-[#475367] text-[14px] font-bold "
            htmlFor="Department"
          >
            Department
          </label>
          <div className="w-full relative">
            <input
              type="text"
              name="department"
              id="department"
              value={quoteDetail.quoteInformation.department}
              disabled={true}
              className="border-[1px] border-[#D0D5DD] rounded-md text-[#98A2B3] text-[14px] bg-[#F0F2F5] px-3 py-3 w-full"
            />
            <img
              src={Multiply}
              alt=""
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
              style={{
                filter:
                  "invert(50%) sepia(10%) saturate(1430%) hue-rotate(170deg) brightness(90%) contrast(80%)",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          {" "}
          <label
            className="text-[#475367] text-[14px] font-bold "
            htmlFor="deliveryDate"
          >
            Expected delivery date
          </label>
          <div className="w-full relative">
            <input
              type="text"
              name="deliveryDate"
              id="deliveryDate"
              value={quoteDetail.quoteInformation.expectedDeliveryDate}
              disabled={true}
              className="border-[1px] border-[#D0D5DD] rounded-md text-[#98A2B3] text-[14px] bg-[#F0F2F5] px-10 py-3 w-full"
            />
            <img
              src={Calendar2}
              alt=""
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5"
              style={{
                filter:
                  "invert(50%) sepia(10%) saturate(1430%) hue-rotate(170deg) brightness(90%) contrast(80%)",
              }}
            />
          </div>
          <p className="text-[#667185] text-[12px] font-medium ">
            Calculated based on lead time and issue date
          </p>
        </div>
      </div>
      <div>
        <h3>Add Items</h3>
        <AddItemsTable quoteDetail={quoteDetail} />
        <div className="flex flex-col w-full space-y-2 py-5 ">
          <label
            htmlFor="note"
            className="text-[#475367] text-[14px] font-bold"
          >
            Note
          </label>
          <div className="flex flex-col w-[50%]">
            <textarea
              id="note"
              name="note"
              className={`${
                note.length === 200
                  ? "border-red-900"
                  : "border-[1px] border-[#D0D5DD]"
              } " rounded-xl p-5 h-[150px] font-[400] text-[14px] text-[#667185] w-full"`}
              value={note}
              placeholder="Enter note here"
              onChange={(e) => setNote(e.target.value)}
              onKeyDown={(e) => {
                if (note.length === 200 && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
            />
            <span
              className={`text-right text-[#667185] text-[12px] font-medium ${
                note.length >= 180 ? "text-red-900" : ""
              } `}
            >
              {note.length}/200
            </span>
          </div>
        </div>
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
          onClick={() => handleStepChange(2)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

const AddItemsTable = ({quoteDetail}: AddItemsTableProps) => {
  const [items, setItems] = useState<QuoteDetails["items"]>(quoteDetail.items);

  const handleInputChange = (
    id: number,
    field: keyof QuoteDetails["items"][number],
    value: number | string
  ) => {
    const updatedItems = items.map((item) =>
      item.id === id
        ? {
            ...item,
            [field]: value,
            amount:
              field === "quantity" || field === "price"
                ? parseInt(
                    field === "quantity" && typeof value === "string"
                      ? value.split(" ")[0]
                      : item.quantity.split(" ")[0],
                    10
                  ) * (field === "price" && typeof value === "string" ? parseFloat(value) : item.price)
                : item.amount,
          }
        : item
    );
    setItems(updatedItems);
  };

  const handleDeleteRow = (id: number) => {
    setItems(items.filter((item) => item.id !== id));
  };
  const subtotal = items.reduce(
    (total, item) =>
      total + parseInt(item.quantity.split(" ")[0], 10) * item.price,
    0
  );

  return (
    <div className="w-full rounded-md p-4 overflow-auto">
      <table className="w-full table-auto border-collapse overflow-scroll">
        <thead>
          <tr className="bg-[#F7F9FC] text-left ">
            <th className="p-2 text-[14px] text-[#667185] font-[400]">Items</th>
            <th className="p-2 text-[14px] text-[#667185] font-[400]">
              Variant
            </th>
            <th className="p-2 text-[14px] text-[#667185] font-[400]">
              Quantity
            </th>
            <th className="p-2 text-[14px] text-[#667185] font-[400]">Price</th>
            <th className="p-2 text-[14px] text-[#667185] font-[400]">
              Expected delivery date
            </th>
            <th className="p-2 text-[14px] text-[#667185] font-[400]">
              Amount
            </th>
          </tr>
        </thead>
        <tbody className="border-b border-[#D0D5DD] pb-5">
          {items.map((item, index) => (
            <tr key={item.id + index}>
              <td className="p-2 max-w-[500px]">
                {" "}
                <CustomSelect
                  options={[
                    {
                      value: item.name,
                      label: item.name,
                    },
                  ]}
                  placeholder={truncateString(
                    item.name,
                    window.innerWidth > 1024 ? 10 : 6
                  )}
                  onChange={() => console.log("item")}
                  className="bg-[#D0D5DD] text-[#98A2B3] tex-[12px]"
                />
              </td>
              <td className="p-2">
                <CustomSelect
                  options={[
                    {
                      value: "Blue",
                      label: "Blue",
                    },
                  ]}
                  placeholder="Blue"
                  onChange={() => console.log("alert")}
                />
              </td>
              <td className="p-2 w-[200px]">
                <div className="relative">
                  <input
                    type="number"
                    value={parseInt(item.quantity.split(" ")[0])}
                    onChange={(e) =>
                      handleInputChange(
                        item.id,
                        "quantity",
                        parseInt(e.target.value) || 0
                      )
                    }
                    className="border border-[#D0D5DD] rounded-md p-2 w-full text-[14px]"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[#667185] text-[12px] font-[400] w-5 h-5">
                    pack
                  </span>
                </div>
              </td>
              <td className="p-2 lg:w-[500px] xl:w-[200px]">
                <div className="relative ">
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) =>
                      handleInputChange(
                        item.id,
                        "price",
                        parseFloat(e.target.value) || 0
                      )
                    }
                    className="border border-gray-300 rounded-md py-2 pl-8 w-full text-[14px]"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5">
                    $
                  </span>
                </div>
              </td>
              <td className="p-2 max-w-[200px]">
                <input
                  type="date"
                  value={item.expectedDeliveryDate}
                  onChange={(e) =>
                    handleInputChange(
                      item.id,
                      "expectedDeliveryDate",
                      e.target.value
                    )
                  }
                  className="border border-[#D0D5DD] rounded-md p-2 w-full text-[14px] w-full"
                />
              </td>
              <td className="p-2 text-gray-600 font-medium">
                ${parseInt(item.quantity.split(" ")[0], 10) * item.price}
              </td>
              <td className="p-2  w-[50px]">
                <button
                  onClick={() => handleDeleteRow(item.id)}
                  className="text-red-500 hover:underline w-full"
                >
                  <img src={Bin} alt="" className="h-[30px] max-w-[50px]" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="">
            <td
              colSpan={5}
              className="p-2 text-right text-[#475367] font-[400] text-[16px]"
            >
              Sub Total
            </td>
            <td className="p-2 text-[#475367] font-[400] text-[16px]">
              ${subtotal}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}