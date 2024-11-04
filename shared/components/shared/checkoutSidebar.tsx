import { Package, Percent, Truck, ArrowRight } from "lucide-react";

import { Button, Skeleton } from "../ui";
import { CheckoutItemDetails } from "./checkoutItemDetails";
import { WhiteBlock } from "./whiteBlock";

export const CheckoutSidebar = ({
  totalAmount,
  loading,
}: {
  totalAmount: number;
  loading?: boolean;
}) => {
  const VAT: number = +(totalAmount * 0.15).toFixed(2);
  const DELIVERY_PRICES: number = 200;
  const TOTAL_COST: number = totalAmount + VAT + DELIVERY_PRICES;

  return (
    <WhiteBlock className="p-6 sticky top-4">
      <div className="flex flex-col gap-1">
        <span className="text-xl">Total:</span>
        {loading ? (
          <Skeleton className="w-48 h-11" />
        ) : (
          <span className="text-[34px] font-extrabold h-11">
            {TOTAL_COST} ₽
          </span>
        )}

        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Package size={18} className="mr-2 text-gray-400" />
              Cart cost:
            </div>
          }
          value={
            loading ? (
              <Skeleton className="w-16 h-6 rounded-[6px] inline-block" />
            ) : (
              totalAmount
            )
          }
        />
        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Percent size={18} className="mr-2 text-gray-400" />
              Taxes:
            </div>
          }
          value={
            loading ? (
              <Skeleton className="w-16 h-6 rounded-[6px] inline-block" />
            ) : (
              VAT
            )
          }
        />
        <CheckoutItemDetails
          title={
            <div className="flex items-center">
              <Truck size={18} className="mr-2 text-gray-400" />
              Delivery:
            </div>
          }
          value={
            loading ? (
              <Skeleton className="w-16 h-6 rounded-[6px] inline-block" />
            ) : (
              DELIVERY_PRICES
            )
          }
        />

        <Button
          loading={loading}
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
