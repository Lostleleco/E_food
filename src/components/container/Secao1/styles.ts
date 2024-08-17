import styled from 'styled-components'
import { Cores } from '../../../styles'

export const CardPrincipal = styled.div`
  display: flex;
  margin: 30px;
  margin-left: 50px;
  margin-right: 50px;
  padding: 100px;
`
export const Container = styled.section`
  display: inline-block;

  gap: 20px;
  max-width: 1024px;
  margin: auto;
`
export const Imagem = styled.img`
  width: 100%;
  height: auto;
`
export const TituloCard = styled.h3`
  font-size: 18px;
  line-height: 21.09px;
  font-weight: 700;
  margin-top: 10px;
`
export const Texto = styled.p`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Roboto', system-ui;
  margin-top: 10px;
`
export const Botao = styled.button`
  background-color: ${Cores.botoes1};
  color: ${Cores.bege};
  font-family: 'Roboto', system-ui;
  font-weight: bold;
  font-size: 14px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
`
export const Avaliacao = styled.span`
  font-size: 18px;
  font-family: 'Roboto', system-ui;
  font-weight: bold;
  margin-bottom: 10px;
`
