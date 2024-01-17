import { ReactNode, createContext, useState } from 'react'
import { api } from '../lib/axios'

export interface IssueSearchResponse {
  title: string
  body: string
  number: number
  created_at: string
  comments: number
  user: {
    login: string
  }
}

interface Issue {
  html_url: string
  title: string
  body: string
  number: number
  comments: number
  created_at: string
  user: {
    login: string
  }
}

interface IssueContextType {
  issuesSearchData: IssueSearchResponse[]
  issuesData: Issue
  isLoadingIssuesData: boolean | null
  fetchSearchIssueInfo: (query?: string) => Promise<void>
  fetchIssuesData: (issueNumber: string | undefined) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issuesSearchData, setIssuesSearchData] = useState(
    [] as IssueSearchResponse[],
  )

  const [issuesData, setIssuesData] = useState({} as Issue)
  const [isLoadingIssuesData, setIsLoadingIssuesData] = useState<
    null | boolean
  >(null)

  async function fetchSearchIssueInfo(query?: string) {
    const params: { q: string } = query
      ? { q: query + ' ' + 'repo:brunogallotte/github-blog' }
      : { q: 'repo:brunogallotte/github-blog' }

    const response = await api.get('/search/issues', { params })
    setIssuesSearchData(response.data.items)
    setTimeout(() => {
      setIsLoadingIssuesData(true)
    }, 300)
  }

  async function fetchIssuesData(issueNumber: string | undefined) {
    const response = await api.get(
      `/repos/brunogallotte/github-blog/issues/${issueNumber}`,
    )

    setIssuesData(response.data)
  }

  return (
    <IssueContext.Provider
      value={{
        issuesSearchData,
        fetchSearchIssueInfo,
        fetchIssuesData,
        issuesData,
        isLoadingIssuesData,
      }}
    >
      {children}
    </IssueContext.Provider>
  )
}
