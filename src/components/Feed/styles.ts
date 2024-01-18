import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const FeedContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 48px;
  padding-bottom: 234px;
  gap: 2rem;

  a {
    text-decoration: none;
  }

  .loading {
    grid-column: span 2;
    justify-content: center;
    justify-self: center;
  }

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
    max-width: 90%;
  }
`
