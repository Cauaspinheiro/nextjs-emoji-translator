import styled from 'styled-components'
import { Theme } from '../styled'

export interface IContainerProps {
  theme: Theme
}

export const Container = styled.div<IContainerProps>`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;

  header {
    height: 18vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    text-align: center;

    h1 {
      font-family: Poppins, sans-serif;
      font-size: 4.8rem;
      font-weight: 800;
      word-spacing: 0.08em;
    }

    h3 {
      font-family: Poppins;
      font-size: 2.2rem;
      font-weight: 500;
      font-size: #f0f0f0;
    }
  }

  main {
    height: 60vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    div {
      display: flex;
      flex-direction: column;

      label {
        font-family: Archivo;
        font-size: 2.4rem;
        font-style: normal;
        font-weight: 700;

        margin-bottom: 20px;
      }

      input {
        width: 600px;
        height: 100px;

        padding: 16px 24px;

        background: #444444;
        border: 2px solid #0a0a0a;
        box-sizing: border-box;
        box-shadow: 6px 8px 3px rgba(0, 0, 0, 0.5);
        border-radius: 12px;

        font-size: 2.4rem;
        color: #f0f0f0;

        outline: none;
      }

      input[type='emoji'] {
        cursor: copy;
      }

      input:focus {
        border: 2px solid #ffc700;
      }
    }
  }
`
