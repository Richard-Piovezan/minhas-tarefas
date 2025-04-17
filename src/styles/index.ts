import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  list-style: none;
  font-family: var(--font-roboto);
  color: var(--color-text-main);
  }

  :root {
    --font-roboto: Roboto, sans-serif;

    --color-bg-main: #0D1326;
    --color-bg-sidebar: #1A2440;
    --color-text-main: #F2EEEB;
    --color-accent-warm: #BF967E;
    --color-accent-gold: #D9AC84;

    --color-bg-card: #222F4C;
    --color-card-title: #D9AC84;
    --color-card-subtitle: #AFA9A3;
    --color-card-border: #2C3959;

    --color-text-subtle: #C7C3C0;

    --color-btn-save: #3B7D67;
    --color-btn-cancel: #A14A4A;
    --color-btn-edit: #2E3B54;

    --color-tag-important-bg: #BF967E;
    --color-tag-important-text: #0D1326;

    --color-tag-pending-bg: #3A4A68;
    --color-tag-pending-text: #F2EEEB;
  }


  body {
    background-color: var(--color-bg-main);
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`

export default GlobalStyle
