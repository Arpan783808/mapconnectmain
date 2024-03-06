import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import styles from "./Desktop1.module.css";

const Desktop1: FunctionComponent = () => {
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
    <div className={styles.desktop1}>
      <div className={styles.frame}>
        <img className={styles.frameChild} alt="" src="/ellipse-4@2x.png" />
        <div className={styles.mapconnect}>MapConnect</div>
      </div>
      <Button
        className={styles.frame1}
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
        className={styles.frame2}
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
      <div className={styles.mapconnectMapsTheContainer}>
        <p className={styles.mapconnectMaps}>MAPCONNECT MAPS</p>
        <p className={styles.theUltimateSolutionToConne}>
          <span>
            <span>THE ULTIMATE SOLUTION TO CONNECT YOU TO THE WORLD</span>
            <span className={styles.span}>{` `}</span>
          </span>
        </p>
      </div>
      <div className={styles.desktop1Child} />
      <img className={styles.desktop1Item} alt="" src="/rectangle-4@2x.png" />
      <div
        className={styles.embarkOnA}
      >{`Embark on a seamless journey with our innovative platform designed to help you through your in yourE-commerce business experience.Get acces to our features for free today `}</div>
      <Button
        className={styles.desktop1Inner}
        disableElevation={true}
        color="primary"
        variant="contained"
        sx={{ borderRadius: "0px 0px 0px 0px", width: 260, height: 74 }}
        onClick={onRectangleButtonClick}
      />
      <div className={styles.getStarted}>GET STARTED</div>
      <div className={styles.frame3}>
        <div className={styles.frame4}>
          <div className={styles.frame5}>
            <img className={styles.frameItem} alt="" src="/rectangle-9.svg" />
            <div className={styles.useOurPolygon}>
              use our polygon feature and search area that fits your requirement
              and find the details for some specific buyer or seller.
            </div>
            <div className={styles.searchASpecific}>SEARCH A SPECIFIC AREA</div>
            <img
              className={styles.frameInner}
              alt=""
              src="/rectangle-10@2x.png"
            />
            <div className={styles.ellipseDiv} />
          </div>
        </div>
        <div className={styles.frame6}>
          <div className={styles.integrateYourBuyerContainer}>
            <span>
              <span>INTEGRATE YOUR BUYER OR SELLER APP</span>
            </span>
            <span className={styles.andExperienceSeamlessPerfor}>
              <span>{` `}</span>
              <span className={styles.andExperienceSeamless}>
                AND EXPERIENCE SEAMLESS PERFORMANCE
              </span>
              <span>
                {" "}
                helping you to get shortest motorable distances between two
                locations
              </span>
            </span>
          </div>
        </div>
        <div className={styles.rectangleParent}>
          <div className={styles.rectangleDiv} />
          <div className={styles.lineDiv} />
          <img className={styles.ellipseIcon} alt="" src="/ellipse-5@2x.png" />
          <div className={styles.mapconnect1}>
            <span>M</span>
            <span className={styles.andExperienceSeamlessPerfor}>
              APCONNECT
            </span>
          </div>
          <div className={styles.aboutUsFaqContainer}>
            <p className={styles.mapconnectMaps}>About us</p>
            <p className={styles.mapconnectMaps}>FAQ</p>
            <p className={styles.mapconnectMaps}>Contact us </p>
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </div>
    </div>
  );
};

export default Desktop1;
