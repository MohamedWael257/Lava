import React from 'react'

const Otp = () => {
    return (
        <div className="form-box otp">
            <h2>OTP Verification</h2>
            <div id="otp">
                <p id="otpmessage">We've sent vertification code to your email : </p>
            </div>
            <br /><br />
            <form>
                <div className="input-box">
                    <input type="text" name="codetest" required />
                    <label>Enter verification code</label>
                </div>
            </form>
            <button className="btn" id="opt_code">Submit</button>
        </div>)
}

export default Otp