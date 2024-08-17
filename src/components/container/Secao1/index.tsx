import {
  Container,
  Texto,
  TituloCard,
  Imagem,
  Botao,
  Avaliacao
} from './styles'

export type CardProps = {
  avaliacao: number
  tag: string
  titulo: string
  descricao: string
  imagem: string
}
export function Card({ avaliacao, tag, titulo, descricao, imagem }: CardProps) {
  return (
    <Container>
      <Avaliacao>{avaliacao}</Avaliacao>
      <Imagem src={imagem} alt="Imagem de sushi" />
      <TituloCard>{titulo}</TituloCard>
      <Texto>{descricao}</Texto>
      <Botao>Saiba mais</Botao>
      <div>{tag}</div>
    </Container>
  )
}

export default Card
