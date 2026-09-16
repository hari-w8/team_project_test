import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setMessage("Login successful! 🎉");

      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}
      <nav className="navbar">

        <div className="logo">
          <span className="logo-dot"></span>
          Nexora
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="nav-button">
          Get in bruh!!!
        </button>

      </nav>


      {/* ================= BODY ================= */}
      <main className="main-content" id="home">

        <div className="background-circle circle-one"></div>
        <div className="background-circle circle-two"></div>

        <section className="login-section">

          {/* LEFT SIDE */}
          <div className="welcome-content">

            <span className="badge">
              ✦ Welcome Back
            </span>

            <h1>
              Your journey
              <br />
              starts <span>here.</span>
            </h1>

            <p>
              Sign in to continue your experience.
              Access your dashboard, projects and
              everything you need from one place.
            </p>

            <div className="mini-stats">

              <div>
                <strong>10K+</strong>
                <span>Users</span>
              </div>

              <div>
                <strong>99.9%</strong>
                <span>Uptime</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Support</span>
              </div>

            </div>

          </div>


          {/* LOGIN CARD */}
          <div className="login-card">

            <div className="login-header">
              <h2>Welcome back</h2>
              <p>Enter your details to access your account.</p>
            </div>

            <form onSubmit={handleLogin}>

              {/* EMAIL */}
              <div className="input-group">

                <label>Email address</label>

                <div className="input-wrapper">
                  <span>✉</span>

                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);

                      if (errors.email) {
                        setErrors({
                          ...errors,
                          email: ""
                        });
                      }
                    }}
                  />
                </div>

                {errors.email && (
                  <small className="error">
                    {errors.email}
                  </small>
                )}

              </div>


              {/* PASSWORD */}
              <div className="input-group">

                <div className="password-label">
                  <label>Password</label>

                  <a href="#">
                    Forgot password?
                  </a>
                </div>

                <div className="input-wrapper">
                  <span>🔒</span>

                  <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);

                      if (errors.password) {
                        setErrors({
                          ...errors,
                          password: ""
                        });
                      }
                    }}
                  />
                </div>

                {errors.password && (
                  <small className="error">
                    {errors.password}
                  </small>
                )}

              </div>


              {/* REMEMBER */}
              <div className="remember-row">

                <label>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

              </div>


              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="login-button"
              >
                Sign In
                <span>→</span>
              </button>

            </form>


            {/* DIVIDER */}
            <div className="divider">
              <span></span>
              <p>OR</p>
              <span></span>
            </div>


            {/* GOOGLE */}
            <button className="google-button">
              <span className="google-icon">G</span>
              Continue with Google
            </button>


            <p className="register-text">
              Don't have an account?
              <a href="#"> Create one</a>
            </p>

          </div>

        </section>


        {/* SUCCESS MESSAGE */}
        {message && (
          <div className="success-message">
            <span>✓</span>
            {message}
          </div>
        )}

      </main>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-main">

          <div className="footer-brand">

            <div className="logo">
              <span className="logo-dot"></span>
              Nexora
            </div>

            <p>
              Build. Create. Connect.
              <br />
              Everything starts here.
            </p>

          </div>


          <div className="footer-column">

            <h4>Product</h4>

            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Security</a>
            <a href="#">Updates</a>

          </div>


          <div className="footer-column">

            <h4>Company</h4>

            <a href="#">About</a>
            <a href="#">Careers</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>

          </div>


          <div className="footer-column">

            <h4>Social</h4>

            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>

          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 Nexora. All rights reserved.
          </p>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;