// import React from 'react'
import { QuoteDetails } from "../assets/data";
import Building from "../assets/building-5.png";

interface QuoteInformation {
quoteInformation: QuoteDetails['quoteInformation']
}

export default function QuoteInformation({quoteInformation}: QuoteInformation) {
  return (
    <div className="border-[1px] border-[#E4E7EC] rounded-xl py-5 px-10">
      <div className="w-full flex justify-between ">
        <h2 className="text-[#1D2739] text-[20px] font-bold">
          Quote Information
        </h2>
        <p className="text-[#667185] text-[14px] font-[400]">
          Expected delivery date:{" "}
          {quoteInformation.expectedDeliveryDate}
        </p>
      </div>
      <div className="flex justify-between items-start ">
        <div className="w-full basis-[40%] flex flex-col gap-5">
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
        <div className="basis-[40%] border-[1px] border-[#E4E7EC] rounded-xl p-3 space-y-4">
          <div className="flex gap-2">
            <img src={Building} alt="" />
            <span className="text-[#475367] text-[12px] font-[400] my-auto">
              Client
            </span>
          </div>
          <div className="flex gap-2">
            <span className="bg-[#FFECE5] text-[#101928] text-[10px] font-bold rounded-full w-[2rem] h-[2rem] flex items-center justify-center">
              {quoteInformation.client.name[0].toUpperCase()}
            </span>
            <div>
              <h3 className="text-[#101928] text-[14px] font-medium">
                {quoteInformation.client.name}
              </h3>
              <p className="text-[#475367] text-[12px] font-[400]">
                {quoteInformation.client.address}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
