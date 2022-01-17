import React, { useEffect, useState } from "react";
import CommitWrapper from "./Commits.styles";
import CommitContainer from "../../components/CommitContainer/CommitContainer";
import CommitInfo from "../../components/CommitInfo/CommitInfo";

const Commits = () => {
  const [commits, setCommits] = useState(null);
  const [selectedCommit, setSelectedCommit] = useState(null);

  const commitsToJSON = (data) => {
    let count = 1;
    let commitObject = {
      user: "",
      sha: "",
      date: "",
      description: "",
    };
    const commitsObjects = [];
    for (let i = 0; i < data.length; i++) {
      let validationObject = {
        1: "sha",
        2: "user",
        3: "date",
        4: "description",
      };

      if (count >= 5) {
        commitsObjects.push(commitObject);
        count = 1;
        commitObject = {
          user: "",
          sha: "",
          date: "",
          description: "",
        };
        commitObject[validationObject[count]] = commits[i].trim();
        count++;
      } else {
        commitObject[validationObject[count]] = commits[i].trim();
        count++;
      }
    }
    return commitsObjects;
  };

  useEffect(() => {
    if (!commits) {
      const callCommits = async () => {
        const response = await fetch("http://localhost:3001/api/commits/all");
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
            commitsObjects
            commits={commits ? commitsToJSON(commits) : []}
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
