import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import BaseUrl from "../components/share/BaseUrl";
const BasketContext = createContext();
const initialState = {
  list: JSON.parse(localStorage.getItem("tarkhine-basket")),
  address: "",
  caption: "",
  offPrices: 0,
  sumPrices: 0,
  useCode: true,
  statePay: "online",
  sendState: "courier",
  shippingPrice: 30000,
};
function reducer(state, action) {
  switch (action.type) {
    case "updateBasket":
      return { ...state, list: action.payload };
    case "deleteList":
      return { ...state, list: [] };
    case "sendCourier":
      return {
        ...state,
        sendState: "courier",
        shippingPrice: 30000,
      };
    case "sendPerson":
      return {
        ...state,
        sendState: "person",
        shippingPrice: 0,
      };
    case "setAddressActive":
      return { ...state, address: action.payload };
    case "addCaption":
      return {
        ...state,
        caption: action.payload.caption,
      };
    case "onlinePay":
      return {
        ...state,
        statePay: "online",
      };
    case "offlinePay":
      return {
        ...state,
        statePay: "offline",
      };
    case "checkCode":
      return {
        ...state,
        useCode: false,
        offPrices: state.offPrices + 60000,
        sumPrices: state.sumPrices - 60000,
      };
    case "setSumPrice":
      return {
        ...state,
        offPrices: action.payload.offer,
        sumPrices: action.payload.price + state.shippingPrice,
      };
    case "resetContext":
      return initialState;
    default:
      throw new Error("Action unkonwn");
  }
}
function BasketProvider({ children }) {
  const [
    {
      list,
      address,
      caption,
      offPrices,
      sumPrices,
      useCode,
      statePay,
      sendState,
      shippingPrice,
    },
    dispatch,
  ] = useReducer(reducer, initialState);
  const getPrice = async () => {
    const foods = JSON.parse(localStorage.getItem("tarkhine-basket")) || [];
    const foodPromises = foods.map(async (item) => {
      const foodResponse = await fetch(`${BaseUrl}/foods/${item.foodId}`);
      const foodData = await foodResponse.json();
      return { foodData, item };
    });
    const foodDataArray = await Promise.all(foodPromises);
    let totalRequestPrice = 0;
    let totalRequestOffer = 0;
    foodDataArray.forEach(({ foodData, item }) => {
      const itemPrice = item.count * foodData.priceValue;
      totalRequestPrice += itemPrice;
      if (foodData.offerPrice) {
        totalRequestOffer +=
          item.count * (foodData.offerPrice - foodData.priceValue);
      }
    });
    dispatch({
      type: "setSumPrice",
      payload: { offer: totalRequestOffer, price: totalRequestPrice },
    });
  };
  useEffect(() => {
    const basketArray = localStorage.getItem("tarkhine-basket");
    if (basketArray) {
      dispatch({
        type: "updateBasket",
        payload: JSON.parse(basketArray),
      });
    } else {
      localStorage.setItem("tarkhine-basket", JSON.stringify([]));
    }
  }, []);
  useEffect(() => {
    getPrice();
  }, [list, sendState]);
  return (
    <BasketContext.Provider
      value={{
        list,
        address,
        caption,
        offPrices,
        sumPrices,
        useCode,
        sendState,
        statePay,
        shippingPrice,
        getPrice,
        dispatch,
      }}
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
