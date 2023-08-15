import React, { useEffect, useState } from "react";
import dummyData from "../data/dummydata.json";
import "./Email.css";

function Email() {
  const [randomData, setRandomData] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * dummyData.length);
    setRandomData(dummyData[randomIndex]);
  }, []);

  return (
    <div className="Email">
      {randomData && (
        <>
          <EmailSender
            sender_name={randomData.sender_name}
            sender_email={randomData.sender_email}
          />
          <EmailDate date={randomData.date} />
          <EmailReceiver
            receiver_name={randomData.receiver_name}
            receiver_email={randomData.receiver_email}
          />
          <EmailContent content={randomData.content} />
          <EmailTags tags={randomData.tags} />
        </>
      )}
    </div>
  );
}

const EmailSender = ({ sender_name, sender_email }) => {
  return (
    <div>
      <h3 className="sender-name">{sender_name}</h3>
      <h3 className="sender-email">{sender_email}</h3>
    </div>
  );
};

const EmailDate = ({ date }) => {
  return <h3 className="email-date">{date}</h3>;
};

const EmailReceiver = ({ receiver_name, receiver_email }) => {
  return (
    <div>
      <h3 className="receiver-name">{receiver_name}</h3>
      <h3 className="receiver-email">{receiver_email}</h3>
    </div>
  );
};

const EmailContent = ({ content }) => {
  return <p className="email-content">{content}</p>;
};
const EmailTags = ({ tags }) => {
  return <p className="email-tags">{tags}</p>;
};
export { Email };
