import { FormContainer, SearchFormContainer } from './styles'

export function SearchForm() {
  return (
    <SearchFormContainer>
      <div>
        <p>Publicações</p>
        <span>6 publicações</span>
      </div>

      <FormContainer action="">
        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>
    </SearchFormContainer>
  )
}
