export const PayOrderTemplate = ({
  orderId,
  totalAmount,
  paymentUrl,
}: {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}) => {
  return (
    <div>
      <h1>Thank you for your order #{orderId}</h1>

      <p>
        Pay for your order in amount of <b>{totalAmount} ₽</b>
      </p>

      <p>
        Go to <a href={paymentUrl}>this link</a> for payment
      </p>
    </div>
  );
};
