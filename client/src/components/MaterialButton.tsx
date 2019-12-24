import styled from "@emotion/styled";

const MaterialButton = styled.button({
  border: "5px solid red",
  borderRadius: "5px",
  background: "blue",
  color: "white",
  "&:disabled": {
    backgroundColor: "red"
  }
});

export default MaterialButton;
