import { useContext, useEffect } from 'react'
import { IssueContext } from '../../contexts/IssuesContext'
import { FeedContainer } from './styles'
import { Post } from './components/Post'

export function Feed() {
  const issuesContextProps = useContext(IssueContext)
  const { issuesData, fetchIssueInfo } = issuesContextProps

  useEffect(() => {
    fetchIssueInfo()
  }, [])

  return (
    <FeedContainer className="container">
      {issuesData.map((issue) => {
        return <Post key={issue.id} title={issue.title} body={issue.body} />
      })}
    </FeedContainer>
  )
}
