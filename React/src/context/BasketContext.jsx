import { createContext, useContext, useReducer } from "react";
const BasketContext = createContext();
const initialState = {
  id: null,
  list: [],
  send: "ارسال توسط پیک",
  address: "",
  caption: "",
  offPrices: 0,
  sumPrices: 0,
  branchesId: "1",
};
function reducer(state, action) {
  switch (action.type) {
    case "test":
      return state;

    default:
      throw new Error("Action unkonwn");
  }
}
function BasketProvider({ children }) {
  const [{ list, send, address, caption, offPrices, sumPrices }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <BasketContext.Provider
      value={{ list, send, address, caption, offPrices, sumPrices, dispatch }}
    >
      {children}
    </BasketContext.Provider>
  );
}
function useBasket() {
  const context = useContext(BasketContext);
  if (context === undefined)
    throw new Error("BasketContext was used outside of the BasketContext");
  return context;
}
export { BasketProvider, useBasket };
