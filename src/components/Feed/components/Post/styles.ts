import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 26rem;
  height: 16.25rem;
  background: ${(props) => props.theme.basePost};
  padding: 2rem;
  border-radius: 10px;

  header {
    display: flex;
    gap: 1rem;

    strong {
      width: 283px;
      font-size: 1.25rem;
      color: ${(props) => props.theme.baseTitle};
    }

    time {
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseSpan};
      margin-top: 5px;
    }
  }

  p {
    color: ${(props) => props.theme.baseText};
    line-height: 160%;
    margin-top: 20px;
  }
`
