import { useContext, useEffect } from 'react'
import { IssueContext } from '../../contexts/IssuesContext'
import { FeedContainer } from './styles'
import { Post } from './components/Post'
import { Link } from 'react-router-dom'

export function Feed() {
  const issuesContextProps = useContext(IssueContext)
  const { issuesSearchData, fetchSearchIssueInfo } = issuesContextProps

  useEffect(() => {
    fetchSearchIssueInfo()
  }, [])

  return (
    <FeedContainer className="container">
      {issuesSearchData.map((issue) => {
        return (
          <Link key={issue.number} to={`/issues/${issue.number}`}>
            <Post
              title={issue.title}
              body={issue.body}
              created_at={issue.created_at}
            />
          </Link>
        )
      })}
    </FeedContainer>
  )
}
