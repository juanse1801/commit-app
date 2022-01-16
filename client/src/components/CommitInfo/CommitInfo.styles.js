import styled from "styled-components";

const CommitInfoWrapper = styled.div`
  width: 80%;
  height: 60vh;
  background-color: #2a293b;
  margin-bottom: 6rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #60606a;
    font-weight: 500;
  }

  .commit-name {
    width: 80%;
    background-color: #3d3a4f;
    border-radius: 7px;
    height: 40px;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
      color: white;
      font-weight: 300;
    }
  }

  .commit-info {
    width: 80%;
  }

  .info-hrz {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    h4 {
      color: #60606a;
      font-weight: 500;
    }

    p {
      color: white;
      font-weight: 300;
      font-size: 14px;
    }
  }
  .info-vrt {
    display: flex;
    flex-direction: column;

    h4 {
      color: #60606a;
      font-weight: 500;
    }

    p {
      color: white;
      font-weight: 300;
      font-size: 14px;
    }
  }
`;

export default CommitInfoWrapper;
