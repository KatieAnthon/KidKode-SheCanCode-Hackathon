import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (event) => {
    setEmail(event.value);
  };

  return (
    <>
      <form onSubmit={handleEmailSubmit}>
        <div className="login-card">
          <div>
            <input
              id="email"
              type="email"
              placeholder="School Email Address"
              className="form-login"
              value={email}
            />
          </div>
          <button
            role="submit"
            className="submit-button"
            id="submit"
            type="submit"
          />
        </div>
      </form>
    </>
  );
}

export default Login;
