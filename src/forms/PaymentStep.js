import React from "react";
import { FaRegCopy } from "react-icons/fa";
// import qrCode1 from "./AnanyaQR.png";
// import qrCode2 from "./MansiQR.png";

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
  // const upiID = isVasavi ? "saiananyat-1@okhdfcbank" : "8309502651@ibl";
  const paymentLink = isVasavi
    ? "https://example.com/pay/1000"
    : "https://example.com/pay/1400";

  // const QR = isVasavi ? qrCode1 : qrCode2;
  const no = isVasavi ? "8897327157" : "8125192190";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("UPI ID copied to clipboard!");
    });
  };

  return (
    <>
      <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", backgroundColor: "#000", color: "#fff", padding: "20px" }}>
        <h1>Dear Delegate,</h1>

    <p>
      Thank you for your interest in our{" "}
      <strong>Priority Round registrations</strong>. We will receive your
      registration after submission, and our team will reach out to you within
      approximately two to three business days. We kindly request your patience
      during this period.
    </p>

    <p>
      Thank you. We appreciate your understanding and look forward to
      connecting with you soon.
    </p>

        <p>
          Best regards, <br />
          <strong>VASAVIMUN</strong>
        </p>
      </div>

      {/*
      <div style={{ padding: "20px", color: "#fff" }}>
        // ... rest of the commented code remains unchanged ...
      </div>
      */}
    </>
  );
}
