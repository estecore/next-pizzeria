import { useEffect } from "react";

import { useCartStore } from "../store";

import { CartStateItem } from "../lib";
import { CreateCartItemValues } from "../services/dto/cart.dto";

export const useCart = (): {
  totalAmount: number;
  items: CartStateItem[];
  loading: boolean;
  error: boolean;
  addCartItem: (item: CreateCartItemValues) => Promise<void>;
  updateItemQuantity: (id: number, quantity: number) => Promise<void>;
  removeCartItem: (id: number) => Promise<void>;
} => {
  const cartState = useCartStore((state) => state);

  useEffect(() => {
    cartState.fetchCartItems();
  }, []);

  return cartState;
};
