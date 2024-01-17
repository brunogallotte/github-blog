import { useContext, useEffect } from 'react'
import { IssueContext } from '../../contexts/IssuesContext'
import { FeedContainer } from './styles'
import { Post } from './components/Post'
import { Link } from 'react-router-dom'
import { PacmanLoader } from 'react-spinners'

export function Feed() {
  const issuesContextProps = useContext(IssueContext)
  const { issuesSearchData, fetchSearchIssueInfo, isLoadingIssuesData } =
    issuesContextProps

  useEffect(() => {
    fetchSearchIssueInfo()
  }, [])

  return (
    <FeedContainer className="container">
      {isLoadingIssuesData ? (
        issuesSearchData.map((issue) => {
          return (
            <Link key={issue.number} to={`/issues/${issue.number}`}>
              <Post
                title={issue.title}
                body={issue.body}
                created_at={issue.created_at}
              />
            </Link>
          )
        })
      ) : (
        <PacmanLoader className="loading" color="#112131" />
      )}
    </FeedContainer>
  )
}
