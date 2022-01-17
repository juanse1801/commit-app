import React from "react";
import CommitContainerWrapper from "./CommitContainer.styles";

const CommitContainer = ({ commits, setSelectedCommit, selectedCommit }) => {
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
    <CommitContainerWrapper>
      <table className="table-commits">
        <div className="table-head">
          <thead>
            <th className="table-columns">
              <p style={{ color: "#8F8F98", fontWeight: "lighter" }}>
                Commits owner
              </p>
            </th>
            <th className="table-columns">
              <p style={{ color: "#8F8F98", fontWeight: "lighter" }}>Id</p>
            </th>
            <th className="table-columns">
              <p style={{ color: "#8F8F98", fontWeight: "lighter" }}>
                Description
              </p>
            </th>
            <th className="table-columns">
              <p style={{ color: "#8F8F98", fontWeight: "lighter" }}>Date</p>
            </th>
          </thead>
        </div>
        <div className="table-body">
          {commits?.map((commit) => (
            <div
              onClick={() => setSelectedCommit(commit)}
              className={
                selectedCommit?.sha === commit?.sha ? "selected-commit" : ""
              }
            >
              <tr>
                <td className="table-columns">
                  <div className="commit-info">
                    <p
                      style={{
                        wordBreak: "break-all",
                        color: "white",
                        fontWeight: "lighter",
                      }}
                    >
                      {commit?.user}
                    </p>
                  </div>
                </td>
                <td className="table-columns">
                  <div className="commit-info">
                    <p
                      style={{
                        wordBreak: "break-all",
                        color: "white",
                        fontWeight: "lighter",
                      }}
                    >
                      {`${commit?.sha.substring(0, 10)}...`}
                    </p>
                  </div>
                </td>
                <td className="table-columns">
                  <div className="commit-info">
                    <p
                      style={{
                        wordBreak: "break-all",
                        color: "white",
                        fontWeight: "lighter",
                      }}
                    >
                      {commit?.description.length > 10
                        ? `${commit?.description.substring(0, 10)}...`
                        : commit?.description}
                    </p>
                  </div>
                </td>
                <td className="table-columns">
                  <div className="commit-info">
                    <p
                      style={{
                        wordBreak: "break-all",
                        color: "white",
                        fontWeight: "lighter",
                      }}
                    >
                      {converTmz(commit?.date)}
                    </p>
                  </div>
                </td>
              </tr>
              <hr></hr>
            </div>
          ))}
        </div>
      </table>
    </CommitContainerWrapper>
  );
};

export default CommitContainer;
