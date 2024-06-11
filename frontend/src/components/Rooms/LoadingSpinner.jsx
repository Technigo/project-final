import styled from "styled-components";

export const LoadingSpinner = () => {
  return (
    <Loading>
      <div class="loading"></div>
    </Loading>
  );
};

const Loading = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 10px solid #ddd;
    border-top-color: 44554b;
    animation: loading 1s linear infinite;
  }
  @keyframes loading {
    to {
      transform: rotate(360deg);
    }
  }
`;
