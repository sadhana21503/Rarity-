import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; 
import './Login.scss';
import Register from '../register/Register';

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    setIsRegistering(true);
    setErrorMessage('');
  };

  const handleLoginClick = (username, password) => {
    setIdentifier(username);
    setPassword(password);
    setIsRegistering(false);
    setErrorMessage('');
  };

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (
      (identifier === storedUsername || identifier === storedEmail) &&
      password === storedPassword
    ) {
      navigate('/checkout');
    } else {
      setErrorMessage('Invalid credentials! Please check your username and password.');
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
    setErrorMessage('');
  };

  const handleSendEmail = () => {
    if (email) {
      setForgotPasswordMessage('Check your email for the reset passcode link.');
    } else {
      setForgotPasswordMessage('Please enter your registered email.');
    }
  };

  return (
    <div className="login-container">
      {isRegistering ? (
        <Register onLoginClick={handleLoginClick} />
      ) : (
        <div className="auth-container">
          <h2>LOGIN WITH US NOW!!</h2>
          {showForgotPassword ? (
            <div className="forgot-password-container">
              <h4>Enter your registered email and click on the send email button. Check your email for the reset passcode link.</h4>
              <div className="form-group">
                <label htmlFor="forgot-email">Enter your registered email</label>
                <input
                  id="forgot-email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button onClick={handleSendEmail}>Send Email</button>
              {forgotPasswordMessage && <p className="forgot-password-message">{forgotPasswordMessage}</p>}
              <p onClick={() => setShowForgotPassword(false)} className="go-to-login-link">Go to Login</p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username or Email"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type={showPassword ? 'text' : 'password'} 
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  className="toggle-visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <button onClick={handleLogin}>SIGN IN</button>
              <p onClick={handleForgotPassword} className="forgot-password-link">Forgot Password?</p>
              <p onClick={handleRegisterClick}>Not a member? Register</p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Login;
