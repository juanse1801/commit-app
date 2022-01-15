import { Octokit } from "@octokit/core";

const getAllCommits = async (req, res, next) => {
  try {
    const octokit = new Octokit({
      auth: process.env.GIT_HUB_KEY,
    });

    // https://docs.github.com/en/rest/reference/commits
    const commits = await octokit.request(
      "GET /repos/juanse1801/commit-app/commits"
    );
    res.status(200).send(commits.data);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export { getAllCommits };
