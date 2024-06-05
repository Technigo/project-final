import styled from "styled-components";

const StyledFooter = styled.div`
  background-color: rgba(34, 47, 62, 1);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  padding: 40px 20px;
  text-align: center;
  font-size: 16px;
  flex-wrap: wrap;

  ul {
    display: flex;

    a {
      color: #f7f7f7;
      display: flex;
    }
  }

  a {
    color: #f7f7f7;
  }

  p {
    color: #f7f7f7;
    display: flex;
  }
`;

export default StyledFooter;
