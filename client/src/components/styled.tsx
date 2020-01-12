import styled, { CreateStyled } from '@emotion/styled'

type Theme = {
  color: {
    primary: string
    positive: string
    negative: string
  }
  colors: {
    bg: string
    text: string
    textdimmer: string
    textdisabled: string
    black: string
    primary: string
    secondary: string
    cyan: string
    cyanlight: string
    cyandark: string
    pink: string
    pinklight: string
    pinkdark: string
  },
  shadows: {
    depth1: string
    depth2: string
    depth3: string
  },
}

export default styled as CreateStyled<Theme>