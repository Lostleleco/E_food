import styled from 'styled-components'
import { Cores } from '../../styles'

export const Top = styled.div`
  background-color: ${Cores.bege};
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
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
  font-weight: bold;
  font-family: 'Roboto', system-ui;
  font-size: 36px;
  line-height: 42.19px;
`
export const Flex = styled.div`
  display: flex;
`
