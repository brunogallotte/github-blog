import { useContext, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { IssueContext } from '../../contexts/IssuesContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as S from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FooterContent, PostInfoContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import Skeleton from 'react-loading-skeleton'

export function PostInfo() {
  const { fetchIssuesData, issuesData } = useContext(IssueContext)
  const { issueNumber } = useParams()

  useEffect(() => {
    fetchIssuesData(issueNumber)
  }, [])

  return (
    <PostInfoContainer className="container">
      <header>
        <div className="wrapper">
          <FontAwesomeIcon icon={S.faChevronLeft} />
          <Link to="/">
            <span>voltar</span>
          </Link>
        </div>
        <div className="wrapper">
          <a href={issuesData.html_url} target="_blank" rel="noreferrer">
            <span>ver no git hub</span>
          </a>
          <FontAwesomeIcon icon={S.faArrowUpRightFromSquare} />
        </div>
      </header>
      <strong>{issuesData.title || <Skeleton />}</strong>
      <FooterContent>
        <div className="userInfoFooterItem">
          <FontAwesomeIcon icon={faGithub} />
          <span>{issuesData.user?.login || 'Usuário não definido'}</span>
        </div>
        <div className="userInfoFooterItem">
          <FontAwesomeIcon icon={S.faCalendarDay} />
          <time>
            {issuesData.created_at && (
              <>
                {formatDistanceToNow(new Date(issuesData.created_at), {
                  addSuffix: true,
                })}
              </>
            )}
          </time>
        </div>
        <div className="userInfoFooterItem">
          <FontAwesomeIcon icon={S.faComment} />
          <time>{issuesData.comments}</time>
        </div>
      </FooterContent>
    </PostInfoContainer>
  )
}
