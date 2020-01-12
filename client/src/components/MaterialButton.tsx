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
  "&:hover": {
    // background: theme.colors.cyanlight,
    background: theme.colors.cyanlight + " radial-gradient(circle, transparent 1%, " + theme.colors.cyanlight + " 1%) center/15000%"
  },
  "&:active": {
    backgroundColor: "#6eb9f7",
    backgroundSize: "100%",
    transition: "background 0s",
  },
  boxShadow: theme.shadows.depth1,
  backgroundPosition: "center",
  transition: "background 0.8s"
}));

export default MaterialButton;
