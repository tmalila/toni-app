import styled from "@emotion/styled";

const MaterialButton = styled.button(({theme}: any) => ({
  border: "none",
  cursor: "pointer",
  display: "inline-block",
  fontSize: "1rem",
  fontWeight: "bold",
  outline: "none",
  overflow: "hidden",
  padding: "0.7rem 0.7rem",
  textTransform: "uppercase",
  verticalAlign: "middle",
  borderRadius: "0.5rem",
  background: theme.colors.cyan,
}));

export default MaterialButton;
