import { ReactNode, createContext } from 'react'

interface Issue {
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
  issues: Issue[]
}

interface IssuesProviderProps {
  children: ReactNode
}

const IssueContext = createContext({} as IssueContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  return (
    <IssueContext.Provider value={{ issues: [] }}>
      {children}
    </IssueContext.Provider>
  )
}
