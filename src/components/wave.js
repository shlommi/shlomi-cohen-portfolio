import React, { useState } from "react"
import styled from "styled-components"
import { font_black, dark_green } from "../theme/_variables"

const Wave = () => {
  const [waves, setWaves] = useState(0)
  const label = `👋 ${waves} ${waves === 1 ? "wave" : "waves"}`

  return (
    <Wrapper>
      <button onClick={() => setWaves(waves + 1)}>{label}</button>
    </Wrapper>
  )
}

export default Wave

const Wrapper = styled.div`
  display: block;
  text-align: center;
  margin: 0 auto 6rem auto;
  width: 100%;
  max-width: 400px;

  button {
    background-color: transparent;
    border: none;
    outline: none;
    font-size: 1.2rem;
    color: ${dark_green};
    font-family: ${font_black};
    transition: all 150ms ease-in-out;

    cursor: pointer;

    &:hover {
      transform: scale(1.2);
    }
  }
`
