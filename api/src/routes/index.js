import commits from "./commits.js";

const routesConfig = (app) => {
  const paths = {
    commits: "/api/commits",
  };

  app.use(paths.commits, commits);
};

export default routesConfig;
