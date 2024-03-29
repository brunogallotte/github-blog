import styled from 'styled-components'
import { breakpoints } from '../../styles/global'

export const UserInfoContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  background: ${(props) => props.theme.baseProfile};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -6rem;
  gap: 2rem;

  .profileImg {
    width: 148px;
    height: 148px;
    object-fit: cover;
    border-radius: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  }
`

export const UserInfoContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 0.5rem;

  strong {
    font-size: 1.5rem;
    color: ${(props) => props.theme.baseTitle};
  }

  p {
    color: ${(props) => props.theme.baseText};
    line-height: 160%;
  }

  footer {
    margin-top: auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    align-items: center;
  }
`

export const UserInfoFooter = styled.footer`
  display: flex;
  color: ${(props) => props.theme.baseSubtitle};
  gap: 1.5rem;

  .userInfoFooterItem {
    display: flex;
    align-items: center;

    svg {
      width: 1.125rem;
      height: 1.125rem;
      color: ${(props) => props.theme.baseLabel};
      margin-right: 0.5rem;
    }
  }
`

export const GitHubLink = styled.a`
  position: absolute;
  top: 0;
  right: 0;
  margin-top: 40px;
  margin-right: 2rem;
  padding-bottom: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.blue};
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-bottom 0.2s;

  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.blue};
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: none;
  }
`
