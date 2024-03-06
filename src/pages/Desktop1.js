import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Desktop1 = () => {
  const navigate = useNavigate();

  const onFrameClick = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onFrame1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[3301px] overflow-hidden text-left text-16xl text-gray-200 font-jockey-one active:flex">
      <div className="absolute top-[45px] left-[25px] w-[239px] h-[62px] overflow-hidden flex flex-row items-start justify-start gap-[0px_17px]">
        <img
          className="w-[62px] relative rounded-[50%] h-[62px] object-cover"
          alt=""
          src="/ellipse-4@2x.png"
        />
        <div className="inline-block w-14 mt-[7px]">MapConnect</div>
      </div>
      <Button
        className="absolute top-[42px] left-[1020px] cursor-pointer"
        disableElevation={true}
        color="primary"
        name="login"
        id="2"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 142, height: 41 }}
        onClick={onFrameClick}
      >
        LOG IN
      </Button>
      <Button
        className="absolute top-[42px] left-[1124px] cursor-pointer"
        disableElevation={true}
        color="primary"
        name="signup"
        id="1"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 138, height: 41 }}
        onClick={onFrame1Click}
      >
        SIGN UP
      </Button>
      <div className="absolute top-[169px] left-[361px] font-jomhuria text-[140px]">
        <p className="m-0">MAPCONNECT MAPS</p>
        <p className="m-0 text-[50px] text-gray-100">
          <span>
            <span>THE ULTIMATE SOLUTION TO CONNECT YOU TO THE WORLD</span>
            <span className="text-gray-200">{` `}</span>
          </span>
        </p>
      </div>
      <div className="absolute top-[438px] left-[45px] rounded-21xl bg-gray-200 box-border w-[1170px] h-[505px] border-[10px] border-solid border-snow" />
      <img
        className="absolute top-[457px] left-[748px] rounded-21xl w-[453px] h-[460px] object-cover"
        alt=""
        src="/rectangle-4@2x.png"
      />
      <div className="absolute top-[631px] left-[85px] text-white inline-block w-[647px] h-[411px]">{`Embark on a seamless journey with our innovative platform designed to help you through your in yourE-commerce business experience.Get acces to our features for free today `}</div>
      <Button
        className="absolute top-[499px] left-[244px] cursor-pointer"
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 260, height: 74 }}
        onClick={onRectangleButtonClick}
      />
      <div className="absolute top-[512px] left-[303px] text-white">
        GET STARTED
      </div>
      <div className="absolute top-[1071px] left-[-1px] w-[1281px] h-[2230px] overflow-hidden text-silver">
        <div className="absolute top-[0px] left-[0px] w-[1475px] overflow-hidden flex flex-col items-end justify-center">
          <div className="w-[1474px] relative h-[777px] overflow-hidden shrink-0">
            <img
              className="absolute top-[0px] left-[0px] w-[1474px] h-[777px]"
              alt=""
              src="/rectangle-9.svg"
            />
            <div className="absolute top-[221px] left-[141px] inline-block w-[562px]">
              use our polygon feature and search area that fits your requirement
              and find the details for some specific buyer or seller.
            </div>
            <div className="absolute top-[112px] left-[141px] text-[60px] text-white">
              SEARCH A SPECIFIC AREA
            </div>
            <img
              className="absolute top-[62px] left-[737px] rounded-[30px] w-[524px] h-[463px] object-cover"
              alt=""
              src="/rectangle-10@2x.png"
            />
            <div className="absolute top-[188px] left-[963px] rounded-[50%] bg-thistle box-border w-[252px] h-[227px] border-[1px] border-solid border-slateblue" />
          </div>
        </div>
        <div className="absolute top-[955px] left-[36px] w-[1226px] h-[202px] overflow-hidden flex flex-col items-end justify-center text-center text-[70px] text-black">
          <div className="w-[1226px] relative inline-block">
            <p className="[margin-block-start:0] [margin-block-end:40px]">
              <span>
                <span>INTEGRATE YOUR BUYER OR SELLER APP</span>
              </span>
            </p>
            <p className="m-0 text-16xl">
              <span>
                <span>{` `}</span>
                <span className="leading-[140%] lowercase text-gray-200">
                  AND EXPERIENCE SEAMLESS PERFORMANCE
                </span>
                <span>
                  {" "}
                  helping you to get shortest motorable distances between two
                  locations
                </span>
              </span>
            </p>
          </div>
        </div>
        <div className="absolute top-[1876px] left-[0px] w-[1475.1px] h-[353.8px] text-[45px] text-white">
          <div className="absolute top-[0px] left-[1.1px] bg-midnightblue w-[1474px] h-[349px] [transform:_rotate(0.19deg)] [transform-origin:0_0]" />
          <div className="absolute top-[53.4px] left-[527.6px] box-border w-1 h-[244px] border-r-[4px] border-solid border-white" />
          <img
            className="absolute top-[55.4px] left-[86.6px] rounded-[50%] w-[62px] h-[62px] object-cover"
            alt=""
            src="/ellipse-5@2x.png"
          />
          <div className="absolute top-[55.4px] left-[183.6px]">
            <span>M</span>
            <span className="text-16xl">APCONNECT</span>
          </div>
          <div className="absolute top-[70.4px] left-[630.6px] text-16xl">
            <p className="m-0">About us</p>
            <p className="m-0">FAQ</p>
            <p className="m-0">Contact us </p>
          </div>
        </div>
        <img
          className="absolute top-[1157px] left-[0px] w-[1429px] h-[626px] overflow-hidden"
          alt=""
          src="/frame.svg"
        />
      </div>
    </div>
  );
};

export default Desktop1;
