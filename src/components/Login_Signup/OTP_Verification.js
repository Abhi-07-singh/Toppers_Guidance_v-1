import React from 'react';
import "./OTP_Verification.css";

const OTPVerification = () => {
    return (
        <>
            <div className='OTP_verification_main_div'>
                <div>
                    <h1>OTP verification</h1>
                </div>
                <div className='input_otp_section'>
                    <div>
                        <input type='text' placeholder='enter your 10 digit mobile number'></input>
                    </div>
                    <div>
                        <button>Send OTP</button>
                    </div>
                    <div>
                        <input type='text' placeholder='enter 6 digit OTP'></input>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OTPVerification;
