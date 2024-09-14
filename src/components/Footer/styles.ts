<<<<<<< HEAD
import styled from "styled-components";
import { breakpoints, cores } from "../../Global";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  height: 298px;

  background-color: ${cores.bege};

  margin-top: 120px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  ul {
    display: flex;
    gap: 8px;
  }
`;

export const Copy = styled.p`
  text-align: center;

  font-size: 10px;
  font-weight: 400;
  width: 480px;

  color: ${cores.vermelho};

  @media (max-width: ${breakpoints.desktop}) {
   width: 320px
  }
`;
=======
import styled from 'styled-components'
import { Logo } from '../../styles'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--mainColor);
  background-color: var(--headerColor);
  max-height: 298px;
  height: 100%;

  ${Logo} {
    margin-top: 40px;
    margin-bottom: 32px;
  }

  .disclaimer-wrapper {
    max-width: 480px;
  }
`

export const SocialMedia = styled.img`
  margin-right: 8px;
`

export const DisclaimerText = styled.p`
  font-size: 10px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
`
>>>>>>> dedc4134ec810872587acf0a8c76f598776266c2
