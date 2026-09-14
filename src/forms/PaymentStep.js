import React, { useState, useRef, useEffect } from "react";
import { FaRegCopy, FaCheck } from "react-icons/fa";

const upi_list = [
  { id: "9848220032@cnrb", contact: "9848220032" },
  { id: "7032909499-2@ybl", contact: "7032909499" },
  { id: "devarakondanandini3226@oksbi", contact: "8897327157" },
  { id: "sirisatya18@ibl", contact: "8125192190" },
];

export default function PaymentStep({
  isVasavi,
  transactionId,
  setTransactionId,
  driveLink,
  setDriveLink,
  utrNumber,
  setUtrNumber,
  setUsedUpiId,
  termsAccepted,
  setTermsAccepted,
}) {
  const [copied, setCopied] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [hasScrolledToEnd, setHasScrolledToEnd] = useState(false);
  const contentRef = useRef(null);

  const fallbackIndex =
    Math.floor(Date.now() / (1000 * 60 * 60 * 24)) % upi_list.length;
  const fallbackUpi = upi_list[fallbackIndex];

  const [upiDetails, setUpiDetails] = useState({
    upiData: fallbackUpi.id,
    recipient: fallbackUpi.contact,
  });

  const fee = isVasavi ? 1200 : 1600;

  useEffect(() => {
    if (setUsedUpiId) setUsedUpiId(fallbackUpi.id);

    fetch("https://mun-dat-gilt.vercel.app/upi/available")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (data && data.upiData) {
          setUpiDetails({
            upiData: data.upiData,
            recipient: data.recipient || (isVasavi ? "8897327157" : "8125192190"),
          });
          if (setUsedUpiId) setUsedUpiId(data.upiData);
        }
      })
      .catch((err) => console.error("Error fetching UPI ID, using fallback:", err));
  }, [isVasavi, setUsedUpiId, fallbackUpi.id]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const openTerms = () => {
    setHasScrolledToEnd(false);
    setShowTermsModal(true);
  };

  const handleScroll = () => {
    const el = contentRef.current;
    if (!el) return;
    const reachedEnd =
      el.scrollTop + el.clientHeight >= el.scrollHeight - 10;
    if (reachedEnd) setHasScrolledToEnd(true);
  };

  // If the content doesn't need scrolling at all (short viewport case), unlock immediately
  useEffect(() => {
    if (showTermsModal && contentRef.current) {
      const el = contentRef.current;
      if (el.scrollHeight <= el.clientHeight) {
        setHasScrolledToEnd(true);
      }
    }
  }, [showTermsModal]);

  return (
    <div>
      <h2>Registration fee: ₹{fee.toLocaleString("en-IN")}</h2>

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
          required
        />
        <input
          type="text"
          id="drive-link"
          placeholder="Payment Screenshot (Drive Link)"
          value={driveLink}
          onChange={(e) => setDriveLink(e.target.value)}
          required
        />
        <p style={{ marginTop: "5px", fontSize: "0.9rem", color: "#fff" }}>
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
        <p style={{ marginTop: "5px", fontSize: "0.9rem", color: "#fff" }}>
          leave empty if not available or invalid
        </p>
      </div>

      {/* Rotating UPI Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            background: "#111",
            padding: "8px 16px",
            borderRadius: "8px",
            border: "1px solid #333",
          }}
        >
          <span
            style={{
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              userSelect: "all",
            }}
          >
            {upiDetails.upiData}
          </span>
          <button
            type="button"
            onClick={() => copyToClipboard(upiDetails.upiData)}
            style={{
              background: "transparent",
              border: "none",
              color: copied ? "#4BB543" : "#fff",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontSize: "1.2rem",
            }}
            title="Copy UPI ID"
          >
            {copied ? <FaCheck /> : <FaRegCopy />}
          </button>
        </div>

        <h5
          style={{
            marginTop: "15px",
            textAlign: "center",
            fontSize: "1rem",
            color: "#fff",
          }}
        >
          For payment issues, contact: {upiDetails.recipient}
        </h5>
      </div>

      {/* 🔹 Terms & Conditions — mandatory, scroll-to-accept */}
      <div
        style={{
          marginTop: "25px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <input
          type="checkbox"
          id="terms-checkbox"
          checked={termsAccepted}
          readOnly
          onClick={(e) => {
            e.preventDefault();
            openTerms();
          }}
          style={{ width: "18px", height: "18px", marginTop: "2px", cursor: "pointer" }}
        />
        <label
          htmlFor="terms-checkbox"
          style={{ color: "#fff", fontSize: "0.95rem", cursor: "pointer" }}
          onClick={openTerms}
        >
          I have read and agree to the{" "}
          <span
            style={{ textDecoration: "underline", fontWeight: "bold" }}
            onClick={(e) => {
              e.stopPropagation();
              openTerms();
            }}
          >
            Terms &amp; Conditions
          </span>
          {termsAccepted && (
            <span style={{ color: "#4BB543", marginLeft: "8px" }}>✓ Accepted</span>
          )}
        </label>
      </div>

      {/* 🔹 Terms Modal */}
      {showTermsModal && (
        <div
          onClick={() => setShowTermsModal(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
            padding: "20px",
            boxSizing: "border-box",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#111",
              border: "1px solid #333",
              borderRadius: "12px",
              maxWidth: "650px",
              width: "100%",
              maxHeight: "85vh",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              boxSizing: "border-box",
            }}
          >
            <h2 style={{ marginTop: 0, marginBottom: "10px" }}>
              Vasavi MUN — Terms and Conditions
            </h2>

            <div
              ref={contentRef}
              onScroll={handleScroll}
              style={{
                overflowY: "auto",
                color: "#ddd",
                fontSize: "0.9rem",
                lineHeight: "1.6",
                paddingRight: "10px",
                borderTop: "1px solid #333",
                borderBottom: "1px solid #333",
                padding: "15px 10px",
                flex: 1,
              }}
            >
              <p>
                <strong>Preamble</strong>
                <br />
                These Terms and Conditions outline the rules, responsibilities, and
                code of conduct for all participants ("Delegates") of The Vasavi
                Model United Nations (MUN). Participation in this conference
                signifies full acceptance of these Terms and Conditions.
              </p>

              <p>
                <strong>Article 1: Code of Conduct</strong>
                <br />
                1.1. <strong> Professionalism & Diplomacy:</strong> Delegates must maintain professionalism and diplomatic
                courtesy at all times, in committee, at social events, and online.
                <br />
                1.2. <strong> Respect: </strong> All participants must be treated with respect and dignity.
                <br />
                1.3. <strong> Anti-Harassment:</strong> Zero tolerance for harassment of any kind — verbal, physical,
                psychological, or otherwise. May result in expulsion.
                <br />
                1.4. <strong> Anti-Bullying:</strong> Bullying, including cyberbullying, is strictly prohibited and
                may result in expulsion.
              </p>

              <p>
                <strong>Article 2: Conduct, Safety, and Privacy</strong>
                <br />
                2.1. <strong> Prohibited Materials:</strong> Alcohol, illegal substances, and weapons are strictly
                forbidden at the venue.
                <br />
                2.2. <strong> Recording & Privacy:</strong> Audio/video recording of other Delegates or proceedings is
                prohibited without explicit consent from the Secretariat and
                individuals involved. Official photographers will be present.
              </p>

              <p>
                <strong>Article 3: Breach of Conduct</strong>
                <br />
                3.1. <strong> Consequences:</strong> Breaches may result in a formal warning, disqualification
                from awards, removal from committee, or expulsion without refund.
                <br />
                3.2. <strong> Reporting:</strong> Witnessed or experienced breaches should be reported to the
                Chair or Secretariat immediately.
                <br />
                3.3. <strong> Finality of Decisions:</strong> Decisions regarding awards by Chairs/Secretariat are final
                and not subject to appeal.
              </p>

              <p>
                <strong>Article 4: Personal Information Exchange</strong>
                <br />
                4.1. Exercise caution when sharing personal information with
                other participants.
                <br />
                4.2. Complaints about private exchanges may be reported to the
                Secretariat, which may mediate or act at its discretion.
              </p>

              <p>
                <strong>Article 5: Photography, Filming &amp; Public Relations</strong>
                <br />
                5.1. The conference may photograph/film all sessions for
                archival, promotional, and educational purposes.
                <br />
                5.2. By registering, Delegates consent to use of their likeness
                in such materials.
                <br />
                5.3. Delegates who prefer not to be photographed must inform the
                Secretariat prior to the conference.
              </p>

              <p>
                <strong>Article 6: Dispute Resolution</strong>
                <br />
                6.1. <strong> Dispute Resolution:</strong> Disputes are first brought to the Conference Secretariat.
                <br />
                6.2. <strong> Final Resolution:</strong> Secretariat decisions on administration/conduct are final
                and not subject to appeal.
              </p>

              <p>
                <strong>Article 7: General Provisions</strong>
                <br />
                7.1. The Secretariat may reject, cancel, or deny entry to any
                Delegate at its discretion for misconduct or rule violations; in
                such cases the Delegate is entitled to a full refund.
                <br />
                7.2. The Organizers may amend these Terms at any time.
                <br />
                7.3. Registered Delegates will be notified of material changes.
                <br />
                7.4. Continued participation after notification constitutes
                acceptance of amended Terms.
              </p>

              <p>
                <strong>Article 8: Acceptance</strong>
                <br />
                By completing registration and submitting payment, the Delegate
                (and parent/guardian if a minor) acknowledges they have read,
                understood, and agree to abide by all Terms and Conditions set
                forth in this document.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "15px",
              }}
            >
              <input
                type="checkbox"
                id="modal-terms-checkbox"
                checked={termsAccepted}
                disabled={!hasScrolledToEnd}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                style={{ width: "18px", height: "18px", cursor: hasScrolledToEnd ? "pointer" : "not-allowed" }}
              />
              <label
                htmlFor="modal-terms-checkbox"
                style={{ color: hasScrolledToEnd ? "#fff" : "#777", fontSize: "0.9rem" }}
              >
                {hasScrolledToEnd
                  ? "I have read and agree to the Terms and Conditions"
                  : "Please scroll down to read the full Terms and Conditions"}
              </label>
            </div>

            <button
              className="btn"
              style={{ marginTop: "15px", opacity: termsAccepted ? 1 : 0.5 }}
              disabled={!termsAccepted}
              onClick={() => setShowTermsModal(false)}
            >
              {termsAccepted ? "Close" : "Accept to continue"}
            </button>
          </div>
        </div>
      )}

      {/* UNCOMMENT THE BELOW CODE DURING DYNAMIC ROUND */}
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
      </div>
      */}
      {/* TILL HERE */}
    </div>
  );
}
