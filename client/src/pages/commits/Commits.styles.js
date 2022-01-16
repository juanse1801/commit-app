import styled from "styled-components";

const CommitWrapper = styled.div`
  background-color: #2a293b;
  width: 100vw;
  height: 100vh;

  .header-container {
    height: 15%;
    display: flex;
    align-items: center;

    h1 {
      margin-left: 2rem;
      color: white;
      font-weight: 600;
    }
  }

  .container {
    width: 100%;
    height: 85%;
    background-color: #313040;
    display: flex;
    flex-direction: row;
  }

  .section-left {
    width: 70%;
  }

  .section-right {
    width: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default CommitWrapper;
