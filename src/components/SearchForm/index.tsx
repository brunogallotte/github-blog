import { useForm } from 'react-hook-form'
import { SearchFormContainer } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { IssueContext } from '../../contexts/IssuesContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { issuesData, fetchIssueInfo } = useContext(IssueContext)

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchRepository(data: SearchFormInputs) {
    fetchIssueInfo(data.query)
  }

  return (
    <SearchFormContainer
      className="container"
      onSubmit={handleSubmit(handleSearchRepository)}
    >
      <header>
        <strong>Publicações</strong>
        <span>{issuesData.length} publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchFormContainer>
  )
}
