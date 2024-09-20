import { useState } from "react";

function RandomNum() {
    const [gnum, setGnum] = useState(null); 
    const [pass, setPass] = useState("");
    const [phone, setPhone] = useState(""); 
    const [error, setError] = useState("");

    // Function to generate OTP and store it in state
    function rnum() {
    
        if (phone.length !== 10 || !/^\d+$/.test(phone)) {
            setError("Please enter a valid 10-digit phone number");
            return; // Stop execution if phone number is invalid
        }

    
        setError("");
        const otp = Math.floor(Math.random() * 90000) + 10000;
        setGnum(otp);
        alert(`Generated OTP: ${otp}`);
    }

    // Handle input change for OTP verification
    function handlePass(event) {
        setPass(event.target.value);
    }

    // Function to verify the OTP
    function verify() {
        if (parseInt(pass) === gnum) {
            alert("OTP Verified Successfully");
        } else {
            alert("Invalid OTP");
        }
        setPass("");
        setPhone("");
    }

    // Handle phone number input and update error
    function handlePhoneChange(event) {
        const phoneNumber = event.target.value;
        setPhone(phoneNumber);

       
        if (phoneNumber.length !== 10 || !/^\d+$/.test(phoneNumber)) {
            setError("Please enter a valid 10-digit phone number");
        } else {
            setError(""); 
        }
    }

    return (
        <div
  className="otp-container"
  style={{
    border: '2px solid orange',
    backgroundColor: 'pink',
    display: 'inline-block',
    margin: '0 auto', 
    padding: '30px',
    maxWidth: '400px', 
    width: '100%',
  }}>
  <h2 style={{ textAlign: 'center' }}>OTP VERIFICATION</h2>

  <label>Phone Number:</label><br /><br />
  <input placeholder="Enter your phone number" value={phone} onChange={handlePhoneChange} style={{ height: '30px', width: '100%' }} />
  <button onClick={rnum} style={{height: '35px',width: '100%',border: '2px solid gray',marginTop: '5px',}}>   Generate OTP </button><br /><br />
<label>One-Time-Password:</label> <br /><br />
<input placeholder="Enter your 5-digit OTP" value={pass} onChange={handlePass}style={{ height: '30px', width: '100%' }}/>
  <button
    onClick={verify}
    style={{
      height: '35px',
      width: '100%', // Keep the width 100%
      border: '2px solid gray',
      marginTop: '5px',
    }}
  >
    Verify OTP
  </button>
  <p style={{ color: 'red', fontWeight: 'bolder' }}>{error}</p>
</div>


    );
}

export default RandomNum;
