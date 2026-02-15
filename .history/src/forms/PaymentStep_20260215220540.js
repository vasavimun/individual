import React from "react";
import { FaRegCopy } from "react-icons/fa";

//import qrCode1 from "./AnanyaQR.png";
//import qrCode2 from "./MansiQR.png";

export default function PaymentStep({
  isVasavi,
  transactionId,
  setTransactionId,
  driveLink,
  setDriveLink,
  utrNumber,
  setUtrNumber,
  upiData,
}) {


 const paymentLink = isVasavi
    ? "https://example.com/pay/1000"
    : "https://example.com/pay/1400";
const no = isVasavi ? "8897327157" : "8125192190";

const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("UPI ID copied to clipboard!");
    });
  };
  // Amount logic
  

  