import React, { useEffect, useState } from "react";
import "./Email.css";

function Email({ randomData }) {
  return (
    <div className="Email">
      {randomData && (
        <>
          <div>
            <EmailSender sender_name={randomData.sender_name} />
            <EmailTags tags={randomData.tags} />
            <EmailDate date={randomData.date} />
          </div>
          <EmailContent content={randomData.content} />
          <div>
            <h1 className="email-info">
              From:
              <span className="receiver-info">
                {randomData.sender_name} {randomData.sender_email}
              </span>
            </h1>
            <h1 className="email-info">
              Date:
              <span className="receiver-info">{randomData.date}</span>
            </h1>
            <h1 className="email-info">
              Subject:
              <span className="receiver-info">{randomData.subject}</span>
            </h1>
            <h1 className="email-info">
              To:
              <span className="receiver-info">
                Isabel Bowen sbtest.isabel@gmail.com
              </span>
            </h1>
          </div>
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

const EmailContent = ({ content }) => {
  return <p className="email-content">{content}</p>;
};
const EmailTags = ({ tags }) => {
  return <p className="email-tags">{tags}</p>;
};
export default Email;
