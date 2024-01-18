import styled from 'styled-components'
import { breakpoints } from '../../../../styles/global'

export const CardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme.basePost};
  padding: 2rem;
  border: 2px solid transparent;
  border-radius: 10px;

  &:hover {
    border: 2px solid ${(props) => props.theme.baseLabel};
  }

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    height: auto;
  }

  header {
    display: flex;
    gap: 1rem;

    strong {
      width: 283px;
      font-size: 1.25rem;
      color: ${(props) => props.theme.baseTitle};

      @media (max-width: ${breakpoints.desktop}) {
        width: 60%;
      }

      @media (max-width: ${breakpoints.tablet}) {
        width: 90%;
      }
    }

    time {
      display: flex;
      flex-shrink: 0;
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseSpan};
      margin-top: 5px;
    }

    @media (max-width: ${breakpoints.desktop}) {
      justify-content: space-between;
    }
  }

  p {
    color: ${(props) => props.theme.baseText};
    line-height: 160%;
    margin-top: 20px;
  }
`
