import React, { useEffect, useState } from "react";
import dummyData from "../data/dummydata.json";
import "./Tab.css";
import Email from "./Email";

function Tab() {
  const [randomData, setRandomData] = useState(null);
  const [isEmailVisible, setIsEmailVisible] = useState(false);
  const [isShowBtnVisible, setIsShowBtnVisible] = useState(true);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dummyData.length);
    setRandomData(dummyData[randomIndex]);
  }, []);

  const handleShowEmail = () => {
    setIsEmailVisible(true);
    setIsShowBtnVisible(false);
  };

  const handleShowDropDownBtn = () => {
    setIsShowBtnVisible(true);
    setIsEmailVisible(false);
  };

  const handleCheck = () => {
    setIsChecked(true);
  };

  const handleUncheck = () => {
    setIsChecked(false);
  };

  return (
    <div className="TabContainer">
      {randomData && (
        <>
          <div className="email-subject">
            {isChecked && (
              <button
                className="checked-button"
                onClick={handleUncheck}
              ></button>
            )}
            {!isChecked && (
              <button
                className="unchecked-button"
                onClick={handleCheck}
              ></button>
            )}
            Fwd: {""}
            {randomData.subject}
            {isShowBtnVisible && (
              <button
                className="show-button"
                onClick={handleShowEmail}
              ></button>
            )}
            {isEmailVisible && (
              <button
                className="drop-down-button"
                onClick={handleShowDropDownBtn}
              ></button>
            )}
          </div>
          {isEmailVisible && <Email randomData={randomData} />}
        </>
      )}
    </div>
  );
}

export default Tab;
