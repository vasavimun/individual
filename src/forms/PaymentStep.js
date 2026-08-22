import React from "react";
import { FaRegCopy } from "react-icons/fa";

// import qrCode1 from "./AnanyaQR.png";
//import qrCode2 from "./MansiQR.png";


export default function PaymentStep({
  isVasavi,
  transactionId,
  setTransactionId,
  driveLink,
  setDriveLink,
  utrNumber,
  setUtrNumber,
  // upiData,
}) {

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("UPI ID copied to clipboard!");
    });
  };
  const no = isVasavi ? "8897327157" : "8125192190";

  return (
    <div>
      <h2>
        Registration fee: Rs. 1,700
      </h2>

      <div className="hd">
        <label className="btn">
            <h3>Payment</h3>
        </label>
        <input
          type="text"
          id="transaction-id"
          placeholder="Enter Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
        />
        <input
          type="text"
          id="drive-link"
          placeholder="Payment Screenshot (Drive Link)"
          value={driveLink}
          onChange={(e) => setDriveLink(e.target.value)}
        />
        <p
          style={{
            marginTop: "5px",
            fontSize: "0.9rem",
            color: "#fff",
          }}
        >
          Ensure access is not restricted
        </p>
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
        <p
        style={{
          marginTop: "5px",
          fontSize: "0.9rem",
          color: "#fff",
        }}
        >leave empty if not available or invalid</p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15px",
          flexDirection: "column",
        }}
      >
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        > */}
          {/* <p
            style={{
              padding: "8px",
              borderRadius: "8px",
              marginRight: "10px",
              backgroundColor: "black",
              color: "white",
              fontSize: "1rem",
              fontWeight: "bold",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
          >
          {upiData ? upiData : "Loading..."}
          </p>
          <FaRegCopy


          
            onClick={() => copyToClipboard(upiData)}
            style={{
              cursor: "pointer",
              fontSize: "1.5rem",
              color: "#fff",
            }} */}
          {/* /> */}
        {/* </div> */}
        <h5
          style={{
            marginTop: "10px",
            textAlign: "center",
            fontSize: "1.2rem",
            color: "#fff",
          }}
        >
          For payment issues, contact: {no}
        </h5>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
          gap: "20px",
        }}
      >
        <div
          style={{
            padding: "10px",
            borderRadius: "15px",
            overflow: "hidden",
            border: "1px solid #ccc",
          }}
        >
          {/* <img
            src={QR}
            alt="QR Code"
            style={{
              height: "auto",
              maxWidth: "100%",
              borderRadius: "10px",
            }}
          /> */}
        </div>
      </div>


      {/*UNCOMMENT THE BELOW CODE DURING DYNAMIC ROUND*/}
{/* 
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            width: "100%",
            padding: "20px 20px",
            borderRadius: "16px",
            background: "linear-gradient(135deg, #1e1e2f, #2a2a40)",
            color: "#fff",
            boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "1.6",
          }}
        >
          <h2
            style={{
              marginBottom: "10px",
              fontSize: "1.8rem",
              fontWeight: "900",
              letterSpacing: "1px",
            }}
          >
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "#dcdcdc",
            }}
          >
            Thank you for registering for <strong>Vasavi MUN Season 6</strong>.
            <br />
            Our team will get in touch with you soon regarding the allocation and the
            payment process.
          </p>
        </div>
      </div> */}
      {/* TILL HERE*/}
      
    </div>
  );
}
// dep issue clear