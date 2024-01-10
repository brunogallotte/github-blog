import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 4.5rem;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    strong {
      font-size: 1.125rem;
      color: ${(props) => props.theme.baseSubtitle};
      font-weight: 700;
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.baseSpan};
    }
  }

  input {
    padding: 1rem;
    color: ${(props) => props.theme.baseLabel};
    background: ${(props) => props.theme.baseInput};
    border: 1px solid ${(props) => props.theme.baseBorder};
    border-radius: 6px;

    &::placeholder {
      color: ${(props) => props.theme.baseLabel};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme.blue};
      outline: none;
    }
  }
`
