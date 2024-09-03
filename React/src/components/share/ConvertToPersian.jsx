import React from "react";
export default function ConvertToPersian(number) {
  const farsiDigits = "۰۱۲۳۴۵۶۷۸۹";
  const regex = /\d/g;
  return number.toString().replace(regex, (digit) => farsiDigits[digit]);
}
