import styled, { css } from "styled-components"

export const Div = styled.div`
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `}
  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}
  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `}
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
`

export const Relative = styled(Div)`
  position: relative;
`

export const Flex = styled(Div)`
  display: flex;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
  ${({ align }) =>
    align &&
    css`
      align-content: ${align};
    `}
`
