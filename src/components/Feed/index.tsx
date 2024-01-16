import { useContext, useEffect } from 'react'
import { IssueContext } from '../../contexts/IssuesContext'
import { FeedContainer } from './styles'
import { Post } from './components/Post'

export function Feed() {
  const issuesContextProps = useContext(IssueContext)
  const { issuesSearchData, fetchSearchIssueInfo, fetchIssuesData } =
    issuesContextProps

  useEffect(() => {
    fetchSearchIssueInfo()
  }, [])

  function handleFetchIssuesData(numberIssue: number) {
    fetchIssuesData(numberIssue)
  }

  return (
    <FeedContainer className="container">
      {issuesSearchData.map((issue) => {
        return (
          <Post
            key={issue.number}
            title={issue.title}
            body={issue.body}
            created_at={issue.created_at}
            onClick={() => handleFetchIssuesData(issue.number)}
          />
        )
      })}
    </FeedContainer>
  )
}
