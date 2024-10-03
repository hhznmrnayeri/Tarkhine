import React, { useState } from "react";
import Nav from "../view/components/Nav";
import Footer from "../view/components/Footer";
import { NavLink } from "react-router-dom";
export default function Payment() {
  const [payment] = useState(true);
  return (
    <div>
      <Nav title="" />
      <div className="container">
        {payment ? (
          <div className="bg-payment bg-center bg-cover flex-center flex-col text-primary text-center mb-6 md:mb-12">
            <img
              src="src/assets/images/buy/success.webp"
              alt="payment"
              className="mt-24 md:mt-12 w-30 h-28 md:w-64 md:h-60"
            />
            <h1 className="font-estedadBold mt-6 md:mt-12 md:text-4xl">
              پرداخت شما با موفقیت انجام شد!
            </h1>
            <p className="mt-4 text-xs md:text-xl md:mt-6">
              کد رهگیری سفارش شما:{" "}
              <span className="tracking__code">۲۱۵۴۹۰۱۹</span>
            </p>
            <div className="flex-center gap-4 mt-12 text-xs md:font-estedadMedium md:text-base md:gap-6 w-full">
              <NavLink
                to="/"
                className="border border-primary bg-white p-2 rounded w-full h-8 md:h-10 md:w-48 md:px-4"
              >
                بازگشت به صفحه اصلی
              </NavLink>
              <NavLink
                to="/profile"
                className="bg-primary text-white p-2 rounded w-full h-8 md:h-10 md:w-48 md:px-4"
              >
                پیگیری سفارش
              </NavLink>
            </div>
          </div>
        ) : (
          <div className="flex-center flex-col text-center mb-6 md:mb-12">
            <img
              src="src/assets/images/buy/error.webp"
              alt="payment"
              className="mt-24 md:mt-12 w-30 h-28 md:w-64 md:h-60"
            />
            <h1 className="font-estedadBold mt-6 md:mt-12 md:text-4xl text-error">
              پرداخت شما ناموفق بود!
            </h1>
            <p className="mt-4 text-xs md:text-xl md:mt-6">
              کد پیگیری تراکنش شما:{" "}
              <span className="tracking__code">۲۱۵۴۹۰۱۹</span>
            </p>
            <div className="flex-center gap-4 mt-12 text-xs md:font-estedadMedium md:text-base md:gap-6 w-full">
              <NavLink
                to="/"
                href="index.html"
                className="text-primary bg-white p-2 rounded w-full h-8 md:h-10 md:w-48 md:px-4"
              >
                بازگشت به صفحه اصلی
              </NavLink>
              <NavLink
                to="/buy"
                className="text-primary bg-white border border-primary p-2 rounded w-full h-8 md:h-10 md:w-48 md:px-4"
              >
                پرداخت مجدد
              </NavLink>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
