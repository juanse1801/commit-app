import styled from "styled-components";

const CommitContainerWrapper = styled.div`
  width: 100%;
  padding: 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;

  hr {
    height: 0.1px;
    border-color: #707072;
    background-color: #707072;
    color: white;
    width: 95%;
    margin-right: 10rem;
  }

  .table-commits {
    width: 100%;
    table-layout: fixed;
    margin-top: 1rem;

    thead {
      display: flex;
      flex-direction: row;
    }

    th {
      display: flex;
      flex-direction: row;
    }
    td {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
    tr {
      overflow: auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
  }

  .table-columns {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    width: 25%;
  }

  .table-head {
    height: 10vh;
  }

  .table-body {
    max-height: 60vh;
    overflow-y: scroll;

    div:hover {
      cursor: pointer;
    }
  }

  .selected-commit {
    background-color: #0ea2f6;
    border-radius: 10px;
  }

  .table-body::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  .table-body::-webkit-scrollbar:vertical {
    width: 5px;
  }

  .table-body::-webkit-scrollbar-button:increment,
  .table-body::-webkit-scrollbar-button {
    display: none;
  }

  .table-body::-webkit-scrollbar-thumb {
    background-color: #797979;
    border-radius: 20px;
  }

  .table-body::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  .commit-info {
    display: flex;
    align-items: center;
    width: 150px;
    font-size: 12px;
    font-weight: 300;
    justify-content: space-between;
    p {
      word-break: break-all;
      text-decoration: none;
    }
  }
`;

export default CommitContainerWrapper;
