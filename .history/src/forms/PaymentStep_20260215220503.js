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

  // Amount logic
  const amount = isVasavi ? 900 : 1400;

  // Active UPI from backend
  const [activeUpi, setActiveUpi] = useState("");

  useEffect(() => {
    if (upiData?.upiId) {
      setActiveUpi(upiData.upiId);
    } else {
      // fallback (until backend connects)
      setActiveUpi(UPI_IDS[0]);
    }
  }, [upiData]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("UPI ID copied!");
  };

  return (
    <>
      
      

      <div
        style={{
          backgroundColor: "#000",
          color: "#fff",
          minHeight: "100vh",
          padding: "40px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>Payment Details</h2>

        {/* Amount Section */}
        <div
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        >
          <h3>Amount to be Paid</h3>
          <h1 style={{ color: "#00ffcc" }}>₹ {amount}</h1>
        </div>

        {/* UPI Section */}
        <div
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "30px",
          }}
        >
          <h3>UPI ID</h3>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#222",
              padding: "10px 15px",
              borderRadius: "8px",
            }}
          >
            <span>{activeUpi}</span>
            <button
              onClick={() => copyToClipboard(activeUpi)}
              style={{
                background: "#00ffcc",
                border: "none",
                padding: "6px 10px",
                cursor: "pointer",
                borderRadius: "5px",
              }}
            >
              Copy
            </button>
          </div>
        </div>

        {/* User Input Section */}
        <div
          style={{
            background: "#111",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3>Enter Payment Details</h3>

          {/* Transaction ID */}
          <div style={{ marginBottom: "20px" }}>
            <label>Transaction ID</label>
            <input
              type="text"
              required="true"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder="Enter your transaction ID"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "8px",
                borderRadius: "6px",
                border: "none",
                outline: "none",
              }}
            />
          </div>

          {/* Google Drive Link */}
          <div>
            <label>Google drive link of the transaction screenshot</label>
            <input
              type="text"
              required="true"
              value={driveLink}
              onChange={(e) => setDriveLink(e.target.value)}
              placeholder={
                driveLink
                  ? ""
                  : "Make the photo public"
              }
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "8px",
                borderRadius: "6px",
                border: "none",
                outline: "none",
                backgroundColor: "#222",
                color: "#fff",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
