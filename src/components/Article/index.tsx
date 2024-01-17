import { useContext } from 'react'
import { IssueContext } from '../../contexts/IssuesContext'
import { ArticleContainer } from './styles'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function Article() {
  const { issuesData } = useContext(IssueContext)

  return (
    <ArticleContainer className="container">
      <p>
        <Markdown remarkPlugins={[remarkGfm]}>{issuesData.body}</Markdown>
      </p>
    </ArticleContainer>
  )
}
