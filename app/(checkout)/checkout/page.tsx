"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { checkoutFormSchema, TypeCheckoutForm } from "@/shared/schemas";

import { createOrder } from "@/app/actions";

import { Api } from "@/shared/services/apiClient";

import { useCart } from "@/shared/hooks";

import { CheckoutSidebar, Container, Title } from "@/shared/components/shared";
import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
} from "@/shared/components/shared/checkout";

export default function CheckoutPage() {
  const [submitting, setSubmitting] = useState<boolean>(false);
  const { totalAmount, items, loading, removeCartItem, updateItemQuantity } =
    useCart();

  const { data: session } = useSession();

  const form = useForm<TypeCheckoutForm>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      phone: "",
      address: "",
      comment: "",
    },
  });

  useEffect(() => {
    async function fetchUserInfo() {
      const data = await Api.auth.getMe();
      const [firstName, lastName] = data.fullName.split(" ");

      form.setValue("firstName", firstName);
      form.setValue("lastName", lastName);
      form.setValue("email", data.email);
    }

    if (session) {
      fetchUserInfo();
    }
  }, [session]);

  const onSubmit: SubmitHandler<TypeCheckoutForm> = async (data) => {
    try {
      setSubmitting(true);

      const url = await createOrder(data);

      toast.success("Order created successfully! Redirecting for payment...", {
        icon: "✅",
      });

      if (url) {
        location.href = url;
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to create order", {
        icon: "❌",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const onClickCountButton = (
    id: number,
    quantity: number,
    type: "plus" | "minus"
  ) => {
    const newQuantity = type === "plus" ? quantity + 1 : quantity - 1;

    updateItemQuantity(id, newQuantity);
  };

  return (
    <Container className="mt-10">
      <Title text="Checkout" className="font-extrabold mb-8 text-[36px]" />

      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-10">
            {/* LEFT */}

            <div className="flex flex-col gap-10 flex-1 mb-20">
              <CheckoutCart
                items={items}
                loading={loading}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />

              <CheckoutPersonalForm
                className={
                  loading ? "opacity-40 select-none pointer-events-none" : ""
                }
              />

              <CheckoutAddressForm
                className={
                  loading ? "opacity-40 select-none pointer-events-none" : ""
                }
              />
            </div>

            {/* RIGHT */}

            <div className="w-[450px]">
              <CheckoutSidebar
                totalAmount={totalAmount}
                loading={loading || submitting}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
}
