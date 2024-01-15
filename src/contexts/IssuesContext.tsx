import { ReactNode, createContext, useState } from 'react'
import { api } from '../lib/axios'

export interface Issue {
  title: string
  body: string
  number: number
  created_at: string
  user: {
    login: string
  }
}

interface IssueContextType {
  issuesData: Issue[]
  fetchIssueInfo: (query?: string) => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issuesData, setIssuesData] = useState([] as Issue[])

  async function fetchIssueInfo(query?: string) {
    const params: { q: string } = query
      ? { q: query + ' ' + 'repo:brunogallotte/github-blog' }
      : { q: 'repo:brunogallotte/github-blog' }

    const response = await api.get('/search/issues', { params })
    setIssuesData(response.data.items)
  }

  return (
    <IssueContext.Provider value={{ issuesData, fetchIssueInfo }}>
      {children}
    </IssueContext.Provider>
  )
}
