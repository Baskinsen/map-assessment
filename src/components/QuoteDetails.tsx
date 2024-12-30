
import { quoteDetail } from "../assets/data";
import Multiply from "../assets/multiply.png";
import QuoteInformation from "./QuoteInformation";
import ArrowUp from '../assets/Arrowup.png'
import TermsImg from '../assets/sign-doc-2.png'
import QuoteItems from "./QuoteItems";
export default function QuoteDetails() {
  return (
    <div className="w-full px-10 py-2 space-y-8">
      <div className="flex justify-between w-full">
        <div>
          <h1 className="text-[#000000] text-[24px] font-bold ">
            Quote Details
          </h1>
          <p className="text-[#667185] text-[14px] font-[400]">
            Created on {quoteDetail.quoteInformation.creationDate}
          </p>
        </div>
        <div className="flex w-[200px] gap-3 h-[2.5rem] my-auto">
          <button className="w-full text-[#FFFFFF] text-[14px] font-bold rounded-xl bg-[#175CFF]">
            Respond
          </button>
          <button className="flex items-center justify-center gap-2 w-full text-[#FFFFFF] text-[14px] font-bold rounded-xl bg-[#D42620]">
            <img src={Multiply} alt="" className="my-auto" />
            Reject
          </button>
        </div>
      </div>
      <QuoteInformation quoteInformation={quoteDetail.quoteInformation} />
      <QuoteItems
        quoteItems={quoteDetail.items}
        totals={quoteDetail.totals}
      />
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
    </div>
  );
}
