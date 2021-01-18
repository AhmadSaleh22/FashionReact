import React, { useState, useRef } from "react";
import Breadcrumb from "../Breadcrumb";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Label from "../Label";
import { useStyles } from "./style";

export default function RegisterComp({ pageComp }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Registration failed The account already exists");
    }
    setLoading(false);
  }

  return (
    <div className={classes.root}>
      <Breadcrumb pageComp="Register" />

      <Typography variant="h4" gutterBottom className={classes.registerTyp}>
        Register
      </Typography>
      {error && <div className={classes.errorMsg}>{error}</div>}

      <form onSubmit={handleSubmit} className={classes.mainField}>
        <Label htmlFor="email" children="Username or email address *" />
        <input
          type="text"
          ref={emailRef}
          required
          className={classes.inputField}
          id="email"
        />

        <Label htmlFor="password" children="Password *" />

        <input
          type="password"
          ref={passwordRef}
          required
          className={classes.inputField}
          id="password"
        />

        <Label htmlFor="confirmPass" children="Confirm Password *" />
        <input
          type="password"
          ref={passwordConfirmRef}
          required
          className={classes.inputField}
          id="confirmPass"
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnField}
          type="submit"
          disabled={loading}
        >
          Register
        </Button>
      </form>
      <div className={classes.linkLog}>
        <Link to="/login">or LogIn</Link>
      </div>
    </div>
  );
}
