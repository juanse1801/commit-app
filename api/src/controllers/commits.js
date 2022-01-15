const getAllCommits = async (req, res, next) => {
  try {
    res.status(200).send("commits");
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

export { getAllCommits };
