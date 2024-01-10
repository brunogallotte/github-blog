import { ReactNode, createContext, useState } from 'react'
import { api } from '../lib/axios'

export interface Issue {
  id: number
  title: string
  body: string
  user: {
    login: string
  }
  comments: number
  repository_url: string
  created_at: string
}

interface IssueContextType {
  issuesData: Issue[]
  fetchIssueInfo: () => Promise<void>
}

interface IssuesProviderProps {
  children: ReactNode
}

export const IssueContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issuesData, setIssuesData] = useState([] as Issue[])

  async function fetchIssueInfo() {
    const response = await api.get('/repos/brunogallotte/github-blog/issues')

    setIssuesData(response.data)
  }

  return (
    <IssueContext.Provider value={{ issuesData, fetchIssueInfo }}>
      {children}
    </IssueContext.Provider>
  )
}
