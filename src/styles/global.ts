import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Nunito', sans-serif;
        background-color: ${(props) => props.theme.baseBackground};
        --webkit-font-smoothing: antialised;
    }

    input, textarea, button {
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    .container {
        max-width: 864px;
        width: 100%;
        margin: 0 auto;
    }
`
