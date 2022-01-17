import { exec } from "child_process";

const getAllCommits = async (req, res, next) => {
  try {
    // To get the last changes
    exec("git pull origin withoutGitHubApi", (err) => {
      if (err) {
        console.log(err);
      }
    });
    exec(
      'git log --all --pretty="format:%H%n%C(white) %an %nDate:   %ad%n%n%w(0,4,4)%B%n"',
      (err, stdout) => {
        if (err) {
          console.log(err);
        }
        const commits = stdout
          .split("\\n \\n")[0]
          .trim()
          .split("\n")
          .filter((el) => el.trim().length > 1);

        res.status(200).send(commits);
      }
    );
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export { getAllCommits };
