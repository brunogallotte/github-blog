import { CardContainer } from './styles'

interface PostProps {
  title: string
  created_at: string
  body: string
}

export function Post({ title, body, created_at }: PostProps) {
  const getBody = (body: string) => {
    if (body.length > 181) {
      return body.slice(0, 181) + '...'
    }

    return body
  }

  return (
    <div>
      <CardContainer>
        <header>
          <strong>{title}</strong>
          <time>{created_at}</time>
        </header>
        <p>{getBody(body)}</p>
      </CardContainer>
    </div>
  )
}
