import React, { useState, useRef } from "react";
import Breadcrumb from "../Breadcrumb";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import Label from "../Label";
import { useStyles } from "../RegisterComp/style";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const GreenCheckbox = withStyles({
  root: {
    color: "#6C6C6C",
    "&$checked": {
      color: "#6C6C6C",
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function LoginComp({ pageComp }) {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  const [state, setState] = useState({
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <div className={classes.root}>
      <Breadcrumb pageComp="Login" />

      <Typography variant="h4" gutterBottom className={classes.registerTyp}>
        Login
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "13px",
          }}
        >
          <FormControlLabel
            control={
              <GreenCheckbox
                checked={state.checkedG}
                onChange={handleChange}
                name="checkedG"
              />
            }
            label="Save Password"
          />
          <Link
            to="/forgetPass"
            className={classes.forgetLabel}
            style={{ marginTop: "10px" }}
          >
            Forget Your Password
          </Link>
        </div>
        <Button
          variant="contained"
          color="secondary"
          className={classes.btnField}
          type="submit"
          disabled={loading}
        >
          Sign In
        </Button>
      </form>
      <div className={classes.linkLog}>
        <Link to="/register">or Create An account</Link>
      </div>
    </div>
  );
}
