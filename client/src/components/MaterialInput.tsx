/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import styled from "@emotion/styled";

const Input = styled.input(({theme}: any) => ({
  appearance: "none",
  background: "transparent",
  border: 0,
  borderBottom: "1px solid " + theme.colors.pink,
  padding: "4px 0",
  position: "relative",
  zIndex: 1,
  width: "100%",
  color: theme.colors.text,
  "&:focus": {
    outline: "none",
  },
  "&:focus + label": {
    color: theme.colors.pink,
    top: "0.2rem",
  },
  "&:valid + label": {
    top: "0.2rem"
  },
  "&:disabled + label": {
    top: "0.2rem"
  },
  "&:focus + indicator": {
    width: "100% !important"
  }
}));

interface props {
  name: string,
  value: any,
  // onChange: any,
  // onBlur: any,
  type: any,
  step: any | undefined,
  setFieldValue: (name: string, event:any) => void,
}

function MaterialInput(props: props) {
  return(
    <div css={theme => ({
      display: "inline-block",
      height: "2rem",
      color: theme.colors.text,
      position: "relative",
      paddingTop: "1.5rem",
      width: "100%",
      marginBottom: "2rem",
    })}>
      <Input id={props.name} type={props.type} name={props.name} step={props.step} {...props} required></Input>
      <label htmlFor={props.name}
        css={theme => ({
          color: theme.colors.pink,
          left: 0,
          position: "absolute",
          top: "1.5rem",
          transition: "top .1s ease-in 0s",
          zIndex: 0,
        })}
      >
        {props.name}
      </label>
      <div className={"indicator"} css={theme => ({
        borderBottom: "2px solid " + theme.colors.pink,
        height: 0,
        top: "47px",
        transition: "width .1s ease-in 0s",
        width: 0,
        zIndex: 2
      })}>
      </div>
    </div>
  )
}

export default MaterialInput;
