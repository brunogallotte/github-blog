import styled from 'styled-components'

export const ArticleContainer = styled.article`
  width: 100%;
  padding: 2.5rem 2rem;

  p {
    color: ${(props) => props.theme.baseText};
    line-height: 160%;
  }
`
