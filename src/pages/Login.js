import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSignUpClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/desktop-1");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[831px] overflow-hidden text-left text-11xl text-black font-abeezee">
      <div className="absolute top-[211px] left-[41px]">LOG IN</div>
      <div className="absolute top-[294px] left-[41px] text-6xl">
        Email /username
      </div>
      <div className="absolute top-[433px] left-[47px] text-6xl">password</div>
      <div className="absolute top-[667px] left-[48px] inline-block w-[439px]">
        Don’s have an accont
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[667px] left-[389px] text-darkblue"
        to="/"
        onClick={onSignUpClick}
      >
        sign up
      </Link>
      <div className="absolute top-[95px] left-[189px] text-white text-center">
        HOME
      </div>
      <Link
        className="cursor-pointer [text-decoration:none] absolute top-[584px] left-[147px] rounded-[20px] bg-mediumblue w-[242px] h-[66px]"
        to="/after-login"
      />
      <Button
        className="absolute top-[106px] left-[137px] cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 242, height: 66 }}
        onClick={onRectangleButtonClick}
      />
      <div className="absolute top-[599px] left-[224px] text-white text-center">
        LOGIN
      </div>
      <img
        className="absolute top-[300px] left-[894px] w-6 h-6 overflow-hidden"
        alt=""
        src="/back-arrow.svg"
      />
      <img
        className="absolute top-[51px] left-[687px] rounded-[50%] w-[694px] h-[698px] object-cover"
        alt=""
        src="/ellipse-3@2x.png"
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[343px] left-[46px]"
        color="primary"
        variant="outlined"
        type="email"
        sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "494px" }}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[488px] left-[48px]"
        color="primary"
        variant="outlined"
        type="password"
        sx={{ "& .MuiInputBase-root": { height: "57px" }, width: "494px" }}
      />
      <div className="absolute top-[120px] left-[143px] text-snow text-center inline-block w-[232px] h-[52px]">
        HOME
      </div>
    </div>
  );
};

export default Login;
