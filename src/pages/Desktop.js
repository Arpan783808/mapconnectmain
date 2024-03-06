import { useCallback } from "react";
import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Desktop = () => {
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
    <div className="w-full relative bg-white h-[1024px] overflow-hidden text-left text-6xl text-black font-abeezee">
      <Button
        className="absolute top-[67px] left-[30px] mix-blend-normal cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 639, height: 99 }}
        onClick={onFrameButtonClick}
      >
        HOME
      </Button>
      <img
        className="absolute top-[116px] left-[720px] w-[687px] h-[810px] object-cover"
        alt=""
        src="/rectangle-12@2x.png"
      />
      <div className="absolute top-[232px] left-[63px] text-11xl">{`Sign up `}</div>
      <div className="absolute top-[315px] left-[63px]">Email</div>
      <div className="absolute top-[437px] left-[63px]">username</div>
      <div className="absolute top-[557px] left-[61px]">password</div>
      <div className="absolute top-[680px] left-[63px]">confirm password</div>
      <div className="absolute top-[878px] left-[63px] text-11xl">
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`If you already have an account `}</p>
      </div>
      <Button
        className="absolute top-[913px] left-[522px] cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px" }}
        onClick={onLoginHereClick}
      >
        Login here
      </Button>
      <Button
        className="absolute top-[812px] left-[229px] cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 242, height: 66 }}
        onClick={onRectangleButtonClick}
      />
      <div className="absolute top-[828px] left-[283px] text-11xl text-white">
        REGISTER
      </div>
      <TextField
        className="[border:none] bg-[transparent] absolute top-[365px] left-[61px]"
        color="primary"
        variant="outlined"
        type="email"
        sx={{ "& .MuiInputBase-root": { height: "54px" }, width: "561px" }}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[485px] left-[61px]"
        color="primary"
        variant="outlined"
        sx={{ "& .MuiInputBase-root": { height: "54px" }, width: "561px" }}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[612px] left-[61px]"
        color="primary"
        variant="outlined"
        type="password"
        sx={{ "& .MuiInputBase-root": { height: "54px" }, width: "561px" }}
      />
      <TextField
        className="[border:none] bg-[transparent] absolute top-[730px] left-[63px]"
        color="primary"
        variant="outlined"
        type="password"
        sx={{ "& .MuiInputBase-root": { height: "54px" }, width: "561px" }}
      />
    </div>
  );
};

export default Desktop;
