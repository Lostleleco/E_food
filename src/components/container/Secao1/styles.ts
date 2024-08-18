import styled from 'styled-components'
import { Cores } from '../../../styles'

export const CardPrincipal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  max-width: 1024px;
  margin: 15px auto;
  padding-top: 100px;
  box-sizing: border-box;
`

export const Container = styled.section`
  width: 472px;
  min-height: 217px;

  display: flex;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${Cores.CardF};
  padding: 10px;
  position: relative;
`

export const Imagem = styled.img`
  width: 472px;
  height: 217px;
  object-fit: cover;
  position: relative;
`

export const TituloCard = styled.h3`
  font-size: 18px;
  line-height: 21.09px;
  font-weight: 700;
  margin-top: 10px;
  color: ${Cores.escrita1};
`

export const Texto = styled.p`
  color: ${Cores.escrita1};
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
  width: 82px;
  height: 24px;
  border: none;
`

export const Avaliacao = styled.div`
  margin-top: 10px;
  margin-left: 200px;
`

export const TA = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  line-height: 21.09px;
  font-weight: 700;
  margin-top: 10px;
  color: ${Cores.escrita1};
`

export const Subtitulo = styled.div`
  position: absolute;
  background-color: ${Cores.botoes1};
  color: ${Cores.bege};
  font-family: 'Roboto', system-ui;
  font-weight: bold;
  font-size: 12px;
  width: 61px;
  height: 16px;
  right: 10px;
  border: none;
  left: 393px;
  margin: 10px;
  padding: 5px;
  text-align: center;
`
export const Star = styled.img`
  width: 21px;
  height: 20px;
  margin-top: 9px;
`
