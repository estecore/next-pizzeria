import { CartItemDTO } from "../services/dto/cart.dto";

export const calcCartItemTotalPrice = (item: CartItemDTO): number => {
  const ingredientsPrice = item.ingredients.reduce(
    (sum, ingredient) => sum + ingredient.price,
    0
  );

  const totalPrice =
    (ingredientsPrice + item.productItem.price) * item.quantity;

  return totalPrice;
};
