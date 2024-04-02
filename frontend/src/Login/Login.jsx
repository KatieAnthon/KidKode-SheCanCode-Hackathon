import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (event) => {
    setEmail(event.value);
  };

  const navigate = useNavigate();

  const goToDashBoardPage = () => {
    navigate("/Profile");
    return null;
  };


  return (
      <form onSubmit={handleEmailSubmit}>
        <div className="login-card">
          <h5>Get Involved!</h5>
        <div>
            <input
              id="email"
              type="email"
              placeholder="School Email Address"
              className="form-login"
              value={email}
            />
            </div>
          <div className="button-container">
          <button
            role="submit"
            className="submit-button"
            id="submit"
            type="submit"
            onClick={goToDashBoardPage}
          >
            Submit
            </button>
        </div>
        </div>
      </form>
  );
}

export default Login;
