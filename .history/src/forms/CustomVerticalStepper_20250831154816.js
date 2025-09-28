import React, { useState } from "react";
import PersonalDetailsStep from "./PersonalDetailsStep";
import PreferencesStep from "./PreferencesStep";
import PaymentStep from "./PaymentStep";
import "./step.css";
import "./form.css";

export default function CustomVerticalStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isVasavi, setIsVasavi] = useState(false);
  const [rollNumber, setRollNumber] = useState("");
  const [year, setYear] = useState("");
  const [branch, setBranch] = useState("");
  const [section, setSection] = useState("");
  const [preference1, setPreference1] = useState("");
  const [preference2, setPreference2] = useState("");
  const [preference3, setPreference3] = useState("");
  const [portfolio1Pref1, setportfolio1Pref1] = useState("");
  const [portfolio2Pref1, setportfolio2Pref1] = useState("");
  const [portfolio1Pref2, setportfolio1Pref2] = useState("");
  const [portfolio2Pref2, setportfolio2Pref2] = useState("");
  const [portfolio1Pref3, setportfolio1Pref3] = useState("");
  const [portfolio2Pref3, setportfolio2Pref3] = useState("");
  const [ipRole1, setIpRole1] = useState("");
  const [ipRole2, setIpRole2] = useState("");
  const [ipRole3, setIpRole3] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [driveLink, setDriveLink] = useState("");
  const [instituteName, setInstituteName] = useState("");
  const [munExperienceDetails, setMunExperienceDetails] = useState("");
  const [recipient , setRecipient] = useState("");
  const [utrNumber,setUtrNumber] = useState("");
  const [upiData, setUpiData] = useState("");
  // labBatch,
  // setLabBatch,
  // eca,
  // setEca,
  const [labBatch, setLabBatch] = useState("");
  const [eca, setEca] = useState("");

  const validatePreferences = () => {
    const errors = [];

    if (preference1.trim().toLowerCase() !== "ip") {
      if (
        !preference1.trim() ||
        !portfolio1Pref1.trim() ||
        !portfolio2Pref1.trim()
      ) {
        errors.push("Preference 1, portfolio 1, and portfolio 2 are required.");
      } else if (
        portfolio1Pref1.trim().toLowerCase() ===
        portfolio2Pref1.trim().toLowerCase()
      ) {
        errors.push(
          "For Preference 1, portfolio 1 and portfolio 2 must be different."
        );
      }
    }

    if (preference2.trim().toLowerCase() !== "ip") {
      if (
        !preference2.trim() ||
        !portfolio1Pref2.trim() ||
        !portfolio2Pref2.trim()
      ) {
        errors.push("Preference 2, portfolio 1, and portfolio 2 are required.");
      } else if (
        portfolio1Pref2.trim().toLowerCase() ===
        portfolio2Pref2.trim().toLowerCase()
      ) {
        errors.push(
          "For Preference 2, portfolio 1 and portfolio 2 must be different."
        );
      }
    }

    if (preference3.trim().toLowerCase() !== "ip") {
      if (
        !preference3.trim() ||
        !portfolio1Pref3.trim() ||
        !portfolio2Pref3.trim()
      ) {
        errors.push("Preference 3, portfolio 1, and portfolio 2 are required.");
      } else if (
        portfolio1Pref3.trim().toLowerCase() ===
        portfolio2Pref3.trim().toLowerCase()
      ) {
        errors.push(
          "For Preference 3, portfolio 1 and portfolio 2 must be different."
        );
      }
    }

    if (preference1.trim().toLowerCase() === "ip" && !ipRole1.trim()) {
      errors.push("Please select a role for IP in Preference 1.");
    }

    if (preference2.trim().toLowerCase() === "ip" && !ipRole2.trim()) {
      errors.push("Please select a role for IP in Preference 2.");
    }

    if (preference3.trim().toLowerCase() === "ip" && !ipRole3.trim()) {
      errors.push("Please select a role for IP in Preference 3.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return false;
    }
    return true;
  };

  const steps = [
    {
      component: (
        <PersonalDetailsStep
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          address={address}
          setAddress={setAddress}
          isVasavi={isVasavi}
          setIsVasavi={setIsVasavi}
          rollNumber={rollNumber}
          setRollNumber={setRollNumber}
          year={year}
          setYear={setYear}
          branch={branch}
          setBranch={setBranch}
          labBatch={labBatch}
          setLabBatch={setLabBatch}
          eca={eca}
          setEca={setEca}
          section={section}
          setSection={setSection}
          instituteName={instituteName}
          setInstituteName={setInstituteName}
          munExperienceDetails={munExperienceDetails}
          setMunExperienceDetails={setMunExperienceDetails}
          upiData={upiData}
          setUpiData={setUpiData}
          recipient={recipient}
          setRecipient={setRecipient}
        />
      ),
    },
    {
      component: (
        <PreferencesStep
          preference1={preference1}
          setPreference1={setPreference1}
          preference2={preference2}
          setPreference2={setPreference2}
          preference3={preference3}
          setPreference3={setPreference3}
          portfolio1Pref1={portfolio1Pref1}
          setportfolio1Pref1={setportfolio1Pref1}
          portfolio2Pref1={portfolio2Pref1}
          setportfolio2Pref1={setportfolio2Pref1}
          portfolio1Pref2={portfolio1Pref2}
          setportfolio1Pref2={setportfolio1Pref2}
          portfolio2Pref2={portfolio2Pref2}
          setportfolio2Pref2={setportfolio2Pref2}
          portfolio1Pref3={portfolio1Pref3}
          setportfolio1Pref3={setportfolio1Pref3}
          portfolio2Pref3={portfolio2Pref3}
          setportfolio2Pref3={setportfolio2Pref3}
          ipRole1={ipRole1}
          setIpRole1={setIpRole1}
          ipRole2={ipRole2}
          setIpRole2={setIpRole2}
          ipRole3={ipRole3}
          setIpRole3={setIpRole3}
        />
      ),
    },
    {
      component: (
        <PaymentStep
          isVasavi={isVasavi}
          transactionId={transactionId}
          setTransactionId={setTransactionId}
          driveLink={driveLink}
          setDriveLink={setDriveLink}
          utrNumber={utrNumber}
          setUtrNumber={setUtrNumber}
          upiData={upiData}
        />
      ),
    },
  ];
  
  const validateStep = () => {
    if (activeStep === 0) {
      const phoneRegex = /^[0-9]{10}$/;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const rollNumberRegex =
        /^[0-9]{4}-[0-9A-Za-z]{2}-[0-9A-Za-z]{3}-[0-9A-Za-z]{3}$/;

      if (!name) {
        alert("Please fill in your name.");
        return false;
      }

      if (!phone) {
        alert("Please fill in your phone number.");
        return false;
      }
      if (!munExperienceDetails) {
        alert("Fill in MUN Experience");
        return false;
      }

      if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
      }

      if (!email) {
        alert("Please fill in your email.");
        return false;
      }
      if (!instituteName) {
        alert("Enter your institute name");
        return false;
      }

      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
      }

      if (!address) {
        alert("Please fill in your address.");
        return false;
      }
      if (!instituteName) {
      }

      if (isVasavi) {
        if (!rollNumber) {
          alert("Please fill in your roll number.");
          return false;
        }

        if (!rollNumberRegex.test(rollNumber)) {
          alert("Roll number must be in the format 1602-2X-XXX-XXX.");
          return false;
        }

        if (!year) {
          alert("Please select your year.");
          return false;
        }

        if (!branch) {
          alert("Please select your branch.");
          return false;
        }

        if (!section) {
          alert("Please select your section.");
          return false;
        }
      }

      return true;
    } else if (activeStep === 1) {
      const preferencesValid = validatePreferences();
      if (!preferencesValid) return false;
    } else if (activeStep === 2) {
      if (!transactionId) {
        alert("Transaction ID is required.");
        return false;
      }
      if (!driveLink) {
        alert("Drive link is required.");
        return false;
      }
      const driveUrlPattern =
        /https:\/\/drive\.google\.com\/(?:file\/d\/|drive\/folders\/)([-\w]+)/;

      
      // const utrvadilation = /^(?:\d{12})?$/;
      // if(!utrvadilation.test(utrNumber)){
      //   alert("Please enter a valid UTR number");
      //   return false;
      // }
    }

    return true;
  };

  const handleNext = () => {
    if (validateStep()) {
      setActiveStep((prevStep) => prevStep + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prevStep) => prevStep - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleSubmit = () => {
    if (validateStep()) {
      setLoading(true);

      const formData = {
        name,
        phone,
        email,
        address,
        instituteName,
        munExperienceDetails,
        rollNumber,
        year,
        branch,
        section,
        preference1,
        preference2,
        preference3,
        portfolio1Pref1,
        portfolio2Pref1,
        portfolio1Pref2,
        portfolio2Pref2,
        portfolio1Pref3,
        portfolio2Pref3,
        ipRole1,
        ipRole2,
        ipRole3,
        transactionId,
        driveLink,
        utrNumber,        
        recipient,  
        upiData,
      
      };

      console.log("Submitting form data:", formData);

      fetch("https://mun-dat.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Success:", data);
          alert("Form submitted successfully!");
          resetForm();
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Failed to submit the form. Please try again.");
          setLoading(false);
        });
    }
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setMunExperienceDetails("");
    setInstituteName("");
    setAddress("");
    setIsVasavi(false);
    setRollNumber("");
    setYear("");
    setBranch("");
    setSection("");
    setPreference1("");
    setPreference2("");
    setPreference3("");
    setportfolio1Pref1("");
    setportfolio2Pref1("");
    setportfolio1Pref2("");
    setportfolio2Pref2("");
    setportfolio1Pref3("");
    setportfolio2Pref3("");
    setIpRole1("");
    setIpRole2("");
    setIpRole3("");
    setTransactionId("");
    setDriveLink("");
    setActiveStep(0);
    setUtrNumber("");
    setRecipient("");
  };

  return (
    <div className="stepper-wrapper">
      {loading ? (
        <>
          <div className="loader-container">
            <div className="pulsing-circle"></div>
            <p>Submitting Response</p>
          </div>
        </>
      ) : (
        <div className="stepper-container">
          <div className="stepper-header">
            <div className="step-header">{steps[activeStep].label}</div>
          </div>
          <div className="stepper-content">{steps[activeStep].component}</div>
          <div className="step-actions">
            {activeStep > 0 && (
              <button className="btn" onClick={handleBack}>
                Back
              </button>
            )}
            {activeStep < steps.length - 1 ? (
              <button className="btn" onClick={handleNext}>
                Next
              </button>
            ) : (
              <button className="btn" onClick={handleSubmit}>
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
