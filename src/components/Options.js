import React, { useState } from "react";

function Options({ onSelectAll, onUnselectAll }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => {
    setIsChecked(true);
    onSelectAll();
  };

  const handleUncheck = () => {
    setIsChecked(false);
    onUnselectAll();
  };

  return (
    <div className="OptionsContainer">
      {isChecked && (
        <button className="checked-button" onClick={handleUncheck}></button>
      )}
      {!isChecked && (
        <button className="unchecked-button" onClick={handleCheck}></button>
      )}
    </div>
  );
}

export default Options;
