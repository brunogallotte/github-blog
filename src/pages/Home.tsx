import { Feed } from '../components/Feed'
import { SearchForm } from '../components/SearchForm'
import { UserInfo } from '../components/UserInfo/intex'

export function Home() {
  return (
    <>
      <UserInfo />
      <SearchForm />
      <Feed />
    </>
  )
}
