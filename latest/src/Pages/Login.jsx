import React from 'react';


function Login() {
  return (
    <div className="loginsignup d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="loginsignup-container p-4 bg-white rounded shadow">
        <h1 className="text-center mb-4">Sign Up</h1>
        <div className="login-signup-fields">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-danger w-100 rounded">Continue</button>
        </div>
        <p className="mt-3 text-center">
          Already Have An account?{' '}
          <span className="text-primary text-danger fw-bold " style={{ cursor: 'pointer' }}>
            Login Here
          </span>
        </p>
        <div className="agree mt-4">
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="termsCheckbox"
            />
            <label className="form-check-label" htmlFor="termsCheckbox">
              I agree to the Terms and Conditions.
            </label>
          </div>
          <p className="text-muted small mt-2">
            By continuing I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
