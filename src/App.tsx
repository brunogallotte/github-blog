import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { IssuesProvider } from './contexts/IssuesContext'
import { SkeletonTheme } from 'react-loading-skeleton'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <IssuesProvider>
        <SkeletonTheme baseColor="#1C2F41" highlightColor="#7B96B2">
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </SkeletonTheme>
      </IssuesProvider>
    </ThemeProvider>
  )
}
