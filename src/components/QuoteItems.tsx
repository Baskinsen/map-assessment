import { QuoteDetails } from "../assets/data";

interface QuoteItemsProps {
 quoteItems: QuoteDetails['items']
totals: QuoteDetails['totals']
}

export default function QuoteItems({quoteItems, totals}: QuoteItemsProps ) {
  return (
    <div className="border-[1px] border-[#E4E7EC] rounded-xl py-5 px-5 xl:px-10">
      <h2 className="text-[#1D2739] text-[20px] font-bold">Item(s)</h2>
      <div className="bg-white rounded-lg border-2 overflow-auto">
        <table className="w-full table-auto border-collapse overflow-scroll">
          <thead>
            <tr className="bg-[#F9FAFB] text-left border-b">
              <th className="bg-[#F9FAFB] py-3 px-4 text-[12px] font-[400] flex gap-3">
                <input type="checkbox" className="form-checkbox " />
                <span>Items</span>
              </th>
              <th className="bg-[#F9FAFB] py-3 px-4 text-[12px] font-[400]">
                Variants
              </th>
              <th className="bg-[#F9FAFB] py-3 px-4 text-[12px] font-[400]">
                Quantity
              </th>
              <th className="bg-[#F9FAFB] py-3 px-4 text-[12px] font-[400]">
                Price
              </th>
              <th className="bg-[#F9FAFB] py-3 px-4 text-[12px] font-[400]">
                Amount
              </th>
              <th className="bg-[#F9FAFB] py-3 px-4 text-[12px] font-[400]">
                Expected Delivery Date
              </th>
            </tr>
          </thead>
          <tbody>
            {quoteItems.map((item, index) => (
              <tr
                key={item.id + index}
                className={`text-sm text-gray-700 ${
                  index === quoteItems.length - 1 ? "" : "border-b-2"
                }`}
              >
                <td className="py-3 px-4 flex items-center gap-3">
                  <input type="checkbox" className="form-checkbox" />
                  <div className="flex gap-2">
                    <img src={item.image} alt="" className="h-10 w-10 my-auto"/>
                    <div>
                      <p className="font-medium text-[#101928] text-[14px] font-medium">
                        {item.name}
                      </p>
                      <p className="text-[#475367] text-[14px] font-[400]">
                        #{item.id}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="py-3 px-4 text-[#344054] text-[14px] font-[400]">
                  {item.variant}
                </td>
                <td className="py-3 px-4 text-[#344054] text-[14px] font-[400]">
                  {item.quantity}
                </td>
                <td className="py-3 px-4 text-[#344054] text-[14px] font-[400]">
                  ${item.price.toFixed(2)}
                </td>
                <td className="py-3 px-4 text-[#344054] text-[14px] font-[400]">
                  ${item.amount.toFixed(2)}
                </td>
                <td className="py-3 px-4 text-[#344054] text-[14px] font-[400]">
                  {item.expectedDeliveryDate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Totals Section */}
      <div className="mt-4 flex justify-end">
        <div className="text-sm font-medium">
          <p className="flex justify-between gap-16">
            <span className=" text-[#344054] text-[16px] font-[400]">
              Sub Total:
            </span>
            <span className="text-[#344054] text-[16px] font-[400]">
              ${totals.subTotal.toFixed(2)}
            </span>
          </p>
          <p className="flex justify-between gap-16 font-semibold text-lg mt-1">
            <span className=" text-[#344054] text-[16px] font-[400]">
              Total:
            </span>
            <span className="text-[#475367] font-bold text-[16px]">
              ${totals.total.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
