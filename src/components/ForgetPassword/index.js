import React, { useState, useRef } from "react";
import Breadcrumb from "../Breadcrumb";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Label from "../Label";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "../RegisterComp/style";

export default function ForgetPassword() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Thank you, please check your inbox for further instructions");
    } catch {
      setError("Failed to reset password, Account not found");
    }
    setLoading(false);
  }
  return (
    <div className={classes.root}>
      <Breadcrumb pageComp="Forget Password" />

      <Typography variant="h4" gutterBottom className={classes.registerTyp}>
        Forget Password
      </Typography>
      {error && <div className={classes.errorMsg}>{error}</div>}
      {message && <div className={classes.messageBox}>{message}</div>}

      <form onSubmit={handleSubmit} className={classes.mainField}>
        <Label htmlFor="email" children="Username or email address *" />
        <input
          type="text"
          ref={emailRef}
          required
          className={classes.inputField}
          id="email"
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnField}
          type="submit"
          disabled={loading}
        >
          Reset Password
        </Button>
      </form>
      <div className={classes.linkLog}>
        <Link to="/login">LogIn</Link>
      </div>
      <div className={classes.linkLog}>
        Need an account? <Link to="/register">Sign Up</Link>
      </div>
    </div>
  );
}
