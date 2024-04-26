import { styled } from 'styled-components'
import { cores } from '../../styles'
import sushi from '../../assets/images/sushi.png'

export const Card = styled.div`
  background-color: ${cores.branco};
  margin-bottom: 48px;
  border: 1px solid ${cores.laranja};
  position: relative;
`

export const FundoCard = styled.div`
  height: 216px;
  background-image: url(${sushi});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
`

export const InfoRestaurante = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-left: 8px;
  margin-right: 8px;
  font-size: 18px;
  font-weight: bold;
`

export const Nota = styled.div`
  display: flex;

  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 16px 8px;
`

export const Botao = styled.button`
  background-color: ${cores.laranja};
  color: ${cores.bege};
  padding: 4px 6px;
  font-size: 14px;
  font-weight: bold;
  margin-left: 8px;
  margin-bottom: 8px;
  border: none;
  cursor: pointer;
`
