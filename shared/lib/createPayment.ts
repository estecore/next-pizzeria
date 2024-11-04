import axios from "axios";

import { PaymentData } from "@/@types/yookassa";

interface Props {
  description: string;
  orderId: number;
  amount: number;
}

export const createPayment = async (details: Props) => {
  const returnUrl = process.env.YOOKASSA_CALLBACK_URL;
  const yookassaUsername = process.env.YOOKASSA_STORE_ID;
  const yookassaPassword = process.env.NEXT_PUBLIC_YOOKASSA_API;

  if (!returnUrl || !yookassaUsername || !yookassaPassword) {
    throw new Error(
      "YOOKASSA_CALLBACK_URL, YOOKASSA_STORE_ID, NEXT_PUBLIC_YOOKASSA_API are not defined"
    );
  }

  const { data } = await axios.post<PaymentData>(
    "https://api.yookassa.ru/v3/payments",
    {
      amount: {
        value: details.amount.toString(),
        currency: "RUB",
      },
      capture: true,
      description: details.description,
      metadata: {
        order_id: details.orderId,
      },
      confirmation: {
        type: "redirect",
        return_url: returnUrl,
      },
    },
    {
      auth: {
        username: yookassaUsername,
        password: yookassaPassword,
      },
      headers: {
        "Content-Type": "application/json",
        "Idempotence-Key": Math.random().toString(36).substring(7),
      },
    }
  );

  return data;
};
