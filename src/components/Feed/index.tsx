import { Post } from './components/Post'
import { FeedContainer } from './styles'

export function Feed() {
  return (
    <FeedContainer className="container">
      <Post />
      <Post />
      <Post />
      <Post />
    </FeedContainer>
  )
}
