import React, { useEffect, useState } from "react";
import CommitWrapper from "./Commits.styles";
import CommitContainer from "../../components/CommitContainer/CommitContainer";
import CommitInfo from "../../components/CommitInfo/CommitInfo";

const Commits = () => {
  const [commits, setCommits] = useState(null);
  const [selectedCommit, setSelectedCommit] = useState(null);

  useEffect(() => {
    if (!commits) {
      const callCommits = async () => {
        const response = await fetch(
          "http://backend-commits:3001/api/commits/all"
        );
        if (response.ok) {
          const allCommits = await response.json();
          setCommits(allCommits);
        }
      };
      callCommits();
    }
  }, [commits]);
  return (
    <CommitWrapper>
      <div className="header-container">
        <div>
          <h1>GIT COMMIT APP</h1>
        </div>
      </div>
      <div className="container">
        <div className="section-left">
          <CommitContainer
            commits={commits}
            setSelectedCommit={setSelectedCommit}
            selectedCommit={selectedCommit}
          />
        </div>
        <div className="section-right">
          <CommitInfo selectedCommit={selectedCommit} />
        </div>
      </div>
    </CommitWrapper>
  );
};

export default Commits;
