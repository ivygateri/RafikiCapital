import { fetchCart, fetchUser } from "../utils/fetchLocalStorageData.js";

const userInfo = fetchUser();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo,
  farmItems: null,
  cartShow: false,
  cartItems: cartInfo,
};