import React from "react";
import CommitInfoWrapper from "./CommitInfo.styles";

const CommitInfo = ({ selectedCommit }) => {
  const converTmz = (date) => {
    const timeString = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const localDate = new Date(
      (typeof date === "string" ? new Date(date) : date).toLocaleString(
        "en-US",
        { timeZone: timeString }
      )
    );
    return `${localDate.getDate()}/${
      localDate.getMonth() + 1 < 10
        ? `0${localDate.getMonth() + 1}`
        : localDate.getMonth() + 1
    }/${localDate.getFullYear()} ${localDate.getHours()}:${localDate.getMinutes()}`;
  };
  return (
    <CommitInfoWrapper>
      {selectedCommit ? (
        <>
          <div className="commit-name">
            <p>{selectedCommit?.author.login}</p>
          </div>
          <div className="commit-info">
            <div className="info-hrz">
              <h4>Id:</h4>
              <p>{selectedCommit?.sha}</p>
            </div>
            <div className="info-vrt">
              <h4>Description:</h4>
              <p>{selectedCommit?.commit.message}</p>
            </div>
            <div className="info-hrz">
              <h4>Date:</h4>
              <p>{converTmz(selectedCommit?.commit?.committer?.date)}</p>
            </div>
          </div>
        </>
      ) : (
        <h2>Please select a commit</h2>
      )}
    </CommitInfoWrapper>
  );
};

export default CommitInfo;
