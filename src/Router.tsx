import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { PostPage } from './pages/PostPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/issues">
          <Route path=":issueNumber" element={<PostPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
