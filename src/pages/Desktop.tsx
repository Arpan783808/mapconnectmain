import { FunctionComponent, useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop.module.css";

const Desktop: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  const onLoginHereClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/after-login");
  }, [navigate]);

  return (
    <div className={styles.desktop5}>
      <Button
        className={styles.desktop5Child}
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 639, height: 99 }}
        onClick={onFrameButtonClick}
      >
        HOME
      </Button>
      <img className={styles.desktop5Item} alt="" src="/rectangle-12@2x.png" />
      <div className={styles.signUp}>{`Sign up `}</div>
      <div className={styles.email}>Email</div>
      <div className={styles.username}>username</div>
      <div className={styles.password}>password</div>
      <div className={styles.confirmPassword}>confirm password</div>
      <div className={styles.ifYouAlreadyContainer}>
        <p className={styles.blankLine}>&nbsp;</p>
        <p className={styles.blankLine}>{`If you already have an account `}</p>
      </div>
      <Button
        className={styles.loginHere}
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px" }}
        onClick={onLoginHereClick}
      >
        Login here
      </Button>
      <Button
        className={styles.desktop5Inner}
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 242, height: 66 }}
        onClick={onRectangleButtonClick}
      />
      <div className={styles.register}>REGISTER</div>
      <TextField
        className={styles.rectangleTextfield}
        color="primary"
        variant="outlined"
        type="email"
        sx={{ "& .MuiInputBase-root": { height: "54px" }, width: "561px" }}
      />
      <TextField
        className={styles.desktop5Child1}
        color="primary"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "54px" }, width: "561px" }}
      />
      <TextField
        className={styles.desktop5Child2}
        color="primary"
        variant="outlined"
        type="password"
        sx={{ "& .MuiInputBase-root": { height: "54px" }, width: "561px" }}
      />
      <TextField
        className={styles.desktop5Child3}
        color="primary"
        variant="outlined"
        type="password"
        sx={{ "& .MuiInputBase-root": { height: "54px" }, width: "561px" }}
      />
    </div>
  );
};

export default Desktop;
