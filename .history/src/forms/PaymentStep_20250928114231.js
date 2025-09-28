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
    <h1> 
      
    </h1>
      {/*
      <div style={{ padding: "20px", color: "#fff" }}>
        <h2>
          {isVasavi
            ? "Pay the registration fee of ₹1000"
            : "Pay the registration fee of ₹1400"}
        </h2>

        <div style={{ marginTop: "15px" }}>
          <label htmlFor="transaction-id">Transaction ID</label>
          <input
            type="text"
            id="transaction-id"
            placeholder="Enter Transaction ID"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            style={{
              padding: "8px",
              fontSize: "1rem",
              borderRadius: "4px",
              width: "100%",
              marginBottom: "10px",
            }}
          />

          <label htmlFor="drive-link">Payment Screenshot (Drive Link)</label>
          <input
            type="text"
            id="drive-link"
            placeholder="Paste Drive Link"
            value={driveLink}
            onChange={(e) => setDriveLink(e.target.value)}
            style={{
              padding: "8px",
              fontSize: "1rem",
              borderRadius: "4px",
              width: "100%",
              marginBottom: "10px",
            }}
          />
          <p style={{ fontSize: "0.9rem" }}>Ensure access is not restricted</p>
        </div>

        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            id="utr-number"
            placeholder="Enter UTR Number"
            value={utrNumber}
            onChange={(e) => setUtrNumber(e.target.value)}
            style={{
              padding: "8px",
              fontSize: "1rem",
              borderRadius: "4px",
              width: "100%",
              marginBottom: "10px",
            }}
          />
          <p style={{ fontSize: "0.9rem" }}>
            Leave empty if not available or invalid
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
            gap: "10px",
          }}
        >
          <p
            style={{
              padding: "8px 12px",
              borderRadius: "8px",
              backgroundColor: "black",
              fontSize: "1rem",
              fontWeight: "bold",
              whiteSpace: "nowrap",
            }}
          >
            {upiData ? upiData : "Loading..."}
          </p>
          <FaRegCopy
            onClick={() => copyToClipboard(upiData)}
            style={{ cursor: "pointer", fontSize: "1.5rem" }}
          />
        </div>

        <h5 style={{ marginTop: "10px" }}>
          For payment issues, contact: {no}
        </h5>

        <div style={{ marginTop: "20px" }}>
          <img
            src={QR}
            alt="QR Code"
            style={{ maxWidth: "200px", borderRadius: "10px" }}
          />
        </div>
      </div>
      */}
    </>
  );
}
