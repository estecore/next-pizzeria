import { CartItemDTO } from "@/shared/services/dto/cart.dto";

export const OrderSuccessTemplate = ({
  orderId,
  items,
}: {
  orderId: number;
  items: CartItemDTO[];
}) => (
  <div>
    <h1>Thank you for your purchase! 🎉</h1>

    <p>Your order #{orderId} has been paid. The list of products:</p>

    <hr />

    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.productItem.product.name} | {item.productItem.price} ₽ x{" "}
          {item.quantity} pc. = {item.productItem.price * item.quantity} ₽
        </li>
      ))}
    </ul>
  </div>
);
