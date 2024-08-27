import {
  Container,
  Texto,
  TituloCard,
  Imagem,
  Botao,
  Avaliacao,
  TA,
  Subtitulo,
  Star,
  Destaque
} from './styles'

export type CardProps = {
  destaque: boolean
  avaliacao: number
  tag: string
  titulo: string
  descricao: string
  imagem: string
  star: string
  onClick: () => void
}

export function Card({
  destaque,
  avaliacao,
  tag,
  titulo,
  descricao,
  imagem,
  star,
  onClick
}: CardProps) {
  return (
    <Container onClick={onClick}>
      {' '}
      {/* Aplicando a função onClick */}
      <Imagem src={imagem} alt="Imagem de sushi" />
      {destaque ? <Destaque>Destaque da Semana</Destaque> : null}
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
