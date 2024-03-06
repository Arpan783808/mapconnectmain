import { FunctionComponent, useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleLinkClick = useCallback(() => {
    navigate("/after-login");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div className={styles.login}>
      <div className={styles.logIn}>LOG IN</div>
      <div className={styles.emailUsername}>Email /username</div>
      <div className={styles.password}>password</div>
      <div className={styles.donsHaveAn}>Don’s have an accont</div>
      <Link className={styles.signUp} to="/" onClick={onSignUpClick}>
        sign up
      </Link>
      <div className={styles.home}>HOME</div>
      <Link
        className={styles.loginChild}
        to="/after-login"
        onClick={onRectangleLinkClick}
      />
      <Button
        className={styles.loginItem}
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 242, height: 66 }}
        onClick={onRectangleButtonClick}
      />
      <div className={styles.login1}>LOGIN</div>
      <img className={styles.backArrowIcon} alt="" src="/back-arrow.svg" />
      <img className={styles.loginInner} alt="" src="/ellipse-3@2x.png" />
      <TextField
        className={styles.rectangleTextfield}
        color="primary"
        variant="outlined"
        type="email"
        sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "494px" }}
      />
      <TextField
        className={styles.loginChild1}
        color="primary"
        variant="outlined"
        type="password"
        sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "494px" }}
      />
      <div className={styles.home1}>HOME</div>
    </div>
  );
};

export default Login;
