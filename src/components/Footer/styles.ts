import styled from 'styled-components'
import { Cores } from '../../styles'

export const Top = styled.div`
  background-color: ${Cores.bege};
  padding: 60px;
  width: 1024;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Logo = styled.img`
  margin-top: 40px;
  width: 145px;
  height: 57.5px;
  top: 1890px;
  left: 621px;
  gap: 0px;
`

export const Plataforma = styled.footer`
  background-color: ${Cores.bege};
  color: ${Cores.escrita1};
  position: relative;
  width: 90%;
  height: 384px;
  text-align: center;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: 400;
  line-height: 11.72px;
  padding-top: 40px;
`
export const Social = styled.img`
  width: 24px;
  height: 24px;
`
export const Flex = styled.div`
  display: flex;
  gap: 8px;
  margin: 32.5px;
`
