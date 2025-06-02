import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find(
        (item) => item.cartId === product.cartId,
      );
      if (item) {
        item.quantity += product.quantity;
      } else {
        state.cartItems.push(product);
      }

      state.numItemsInCart += product.quantity;
      state.cartTotal += product.quantity * product.price;
      cartSlice.caseReducers.calculateTotal(state);

      toast.success("Item added to cart");
    },
    removeItem: (state, action) => {
      const { cartId } = action.payload.product;
      const product = state.cartItems.find((item) => item.cartId === cartId);
      state.cartItems = state.cartItems.filter(
        (item) => item.cartId !== cartId,
      );
      state.numItemsInCart -= product.quantity;
      state.cartTotal -= product.price * product.quantity;
      cartSlice.caseReducers.calculateTotal(state);
      toast.error("Item removed from cart");
    },
    editItem: (state, action) => {
      const { cartId, quantity } = action.payload.product;
      const item = state.cartItems.find((item) => item.cartId === cartId);
      state.numItemsInCart += quantity - item.quantity;
      state.cartTotal += item.price * (quantity - item.quantity);
      item.quantity = quantity;
      cartSlice.caseReducers.calculateTotal(state);
      toast.success("Cart updated");
    },
    calculateTotal: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal += state.cartTotal + state.shipping + state.tax;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem, editItem } = cartSlice.actions;

export default cartSlice.reducer;
