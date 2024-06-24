import styled from "styled-components"

export const StyledContainer = styled.div`
  padding: 80px 20px;
  background-color: #dee0e2;
  color: #333;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #222;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    max-width: 400px;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    text-align: left;

    label {
      margin-bottom: 5px;
      color: #555;
    }

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 16px;
    }
  }

  .user-loading {
    color: #555;
  }
`