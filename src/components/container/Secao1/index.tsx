import {
  Container,
  Texto,
  TituloCard,
  Imagem,
  Botao,
  Avaliacao,
  TA,
  Subtitulo,
  Star
} from './styles'

export type CardProps = {
  avaliacao: number
  tag: string
  titulo: string
  descricao: string
  imagem: string
  star: string
}

export function Card({
  avaliacao,
  tag,
  titulo,
  descricao,
  imagem,
  star
}: CardProps) {
  return (
    <Container>
      <Imagem src={imagem} alt="Imagem de sushi" />
      <Subtitulo>{tag}</Subtitulo>
      <TA>
        <TituloCard>{titulo}</TituloCard>
        <Avaliacao>{avaliacao}</Avaliacao>
        <Star src={star} alt="estrela" />
      </TA>
      <Texto>{descricao}</Texto>
      <Botao>Saiba mais</Botao>
    </Container>
  )
}

export default Card
