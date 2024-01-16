import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faArrowUpRightFromSquare,
  faCalendarDay,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FooterContent, PostInfoContainer } from './styles'
import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { IssueContext } from '../../contexts/IssuesContext'

export function PostInfo() {
  const { fetchIssuesData } = useContext(IssueContext)
  const { issueNumber } = useParams()

  useEffect(() => {
    fetchIssuesData(issueNumber)
  }, [])

  return (
    <PostInfoContainer className="container">
      <header>
        <div className="wrapper">
          <FontAwesomeIcon icon={faChevronLeft} />
          <span>voltar</span>
        </div>
        <div className="wrapper">
          <span>ver no git hub</span>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </header>
      <strong>Javascript data types and data structures</strong>
      <FooterContent>
        <div className="userInfoFooterItem">
          <FontAwesomeIcon icon={faGithub} />
          <span>brunogallotte</span>
        </div>
        <div className="userInfoFooterItem">
          <FontAwesomeIcon icon={faCalendarDay} />
          <time>Há 1 dia</time>
        </div>
        <div className="userInfoFooterItem">
          <FontAwesomeIcon icon={faComment} />
          <time>5 comentários</time>
        </div>
      </FooterContent>
    </PostInfoContainer>
  )
}
