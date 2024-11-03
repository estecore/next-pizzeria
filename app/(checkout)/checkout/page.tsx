import { ArrowRight, Package, Percent, Truck } from "lucide-react";

import {
  CheckoutItemDetails,
  Container,
  Title,
  WhiteBlock,
} from "@/shared/components/shared";
import { Button, Input, Textarea } from "@/shared/components/ui";

export default async function CheckoutPage() {
  return (
    <Container className="mt-10">
      <Title text="Checkout" className="font-extrabold mb-8 text-[36px]" />

      <div className="flex gap-10">
        <div className="flex flex-col gap-10 flex-1 mb-20">
          <WhiteBlock title="1. Cart">13245</WhiteBlock>
          <WhiteBlock title="2. Personal info">
            <div className="grid grid-cols-2 gap-5">
              <Input
                name="firstName"
                className="text-base"
                placeholder="First Name"
              />
              <Input
                name="lastName"
                className="text-base"
                placeholder="Last Name"
              />
              <Input name="email" className="text-base" placeholder="E-Mail" />
              <Input name="phone" className="text-base" placeholder="Phone" />
            </div>
          </WhiteBlock>
          <WhiteBlock title="3. Address">
            <div className="flex flex-col gap-5">
              <Input
                name="address"
                className="text-base"
                placeholder="Address"
              />
              <Textarea
                name="comments"
                rows={5}
                className="text-base"
                placeholder="Comments to order"
              />
            </div>
          </WhiteBlock>
        </div>

        {/* RIGHT */}

        <div className="w-[450px]">
          <WhiteBlock className="p-6 sticky top-4">
            <div className="flex flex-col gap-1">
              <span className="text-xl">Total:</span>
              <span className="text-[34px] font-extrabold">4506 ₽</span>

              <CheckoutItemDetails
                title={
                  <div className="flex items-center">
                    <Package size={18} className="mr-2 text-gray-400" />
                    Item cost:
                  </div>
                }
                value={4506}
              />
              <CheckoutItemDetails
                title={
                  <div className="flex items-center">
                    <Percent size={18} className="mr-2 text-gray-400" />
                    Taxes:
                  </div>
                }
                value={100}
              />
              <CheckoutItemDetails
                title={
                  <div className="flex items-center">
                    <Truck size={18} className="mr-2 text-gray-400" />
                    Delivery:
                  </div>
                }
                value={200}
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
        </div>
      </div>
    </Container>
  );
}
