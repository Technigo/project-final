import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: rgba(34, 47, 62, 1);
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-size: 10px;
  padding: 15px 0;

  ul {
    display: flex;
    flex-direction: column;
    padding-left: 0;

    a {
      color: #f7f7f7;
      text-align: center;
      font-size: 18px;
      width: fit-content;
      margin: 0 auto;
    }
  }

  a {
    color: #f7f7f7;
  }

  p {
    color: #f7f7f7;
  }
`;

export default StyledFooter;
