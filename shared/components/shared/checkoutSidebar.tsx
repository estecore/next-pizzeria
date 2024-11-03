import { Package, Percent, Truck, ArrowRight } from "lucide-react";

import { Button } from "../ui";
import { CheckoutItemDetails } from "./checkoutItemDetails";
import { WhiteBlock } from "./whiteBlock";

export const CheckoutSidebar = ({ totalAmount }: { totalAmount: number }) => {
  const VAT: number = +(totalAmount * 0.15).toFixed(2);
  const DELIVERY_PRICES: number = 200;
  const TOTAL_COST: number = totalAmount + VAT + DELIVERY_PRICES;

  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Total:</span>
        <span className="text-[34px] font-extrabold">{TOTAL_COST} ₽</span>

        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Package size={18} className="mr-2 text-gray-400" />
              Cart cost:
            </div>
          }
          value={totalAmount}
        />
        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Percent size={18} className="mr-2 text-gray-400" />
              Taxes:
            </div>
          }
          value={VAT}
        />
        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Truck size={18} className="mr-2 text-gray-400" />
              Delivery:
            </div>
          }
          value={DELIVERY_PRICES}
        />

        <Button
          type="submit"
          className="w-full h-14 rounded-2xl mt-6 text-base font-bold"
        >
          Proceed to payment
          <ArrowRight className="w-5 ml-2" />
        </Button>
      </div>
    </WhiteBlock>
  );
};
