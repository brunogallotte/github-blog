import { SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer className="container">
      <header>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </header>
      <input type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}
