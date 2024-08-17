import styled from 'styled-components'
import { Cores } from '../../styles'

export const Top = styled.div`
  background-color: ${Cores.bege};
  width: 100%; /* Ou qualquer largura desejada */
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centraliza os itens horizontalmente */
  justify-content: center; /* Centraliza os itens verticalmente */
  position: relative; /* Necessário para o posicionamento do Titulo */
`

export const Logo = styled.img`
  width: 125px;
  height: 57.5px;
  display: block;
  margin: 0 auto;
  padding-bottom: 138px;
  padding-top: 40px;
`

export const Titulo = styled.h1`
  color: ${Cores.escrita1};
  width: 539px;
  height: 84px;
  text-align: center;
  margin: 0 auto;
`
