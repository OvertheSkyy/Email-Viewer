import React, { useEffect, useState } from "react";
import dummyData from "../data/dummydata.json";
import "./Tab.css";

function Tab() {
  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dummyData.length);
    setRandomData(dummyData[randomIndex]);
  }, []);

  return (
    <div className="Email">
      {randomData && (
        <>
          <EmailSubject subject={randomData.subject} />
        </>
      )}
    </div>
  );
}

const EmailSubject = ({ subject }) => {
  return (
    <div>
      <h2 className="email-subject">{subject}</h2>
    </div>
  );
};

export { Tab };
