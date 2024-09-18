import React from "react";
export default function ConvertToPersian(number) {
  const farsiDigits = "۰۱۲۳۴۵۶۷۸۹";
  const regex = /\d/g;
  return Number(number)
    .toLocaleString()
    .toString()
    .replace(regex, (digit) => farsiDigits[digit]);
}
