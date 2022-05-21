import styled from 'styled-components'
import * as colors from '../../utils/color-constants'

export const WidgetContainer = styled.div`
  display: flex;
  width: 960px;
  flex-direction: column;
  font-size: 16px;
  line-height: 23px;

  @media (max-width: 992px) and (min-width: 767px) {
    width: auto;     
  }

  @media (max-width: 768px)  {
    display: grid;
    width: auto;    
    justify-items: center;
  }
`
export const MainTitle = styled.p`
  font-size: 50px;
  line-height: 120%;
  margin-bottom: 5px;
  justify-self: start;

  @media (max-width: 575px)  {
    font-size: 40px;
  }
` 
export const SubTitle = styled.p`
  font-size: 20px;
  line-height: 100%;
  margin-bottom: 60px;
  justify-self: start;

  @media (max-width: 768px)  {
    margin-left: 5px;
  }
`

export const SpinnerContainer = styled.svg`
  animation: rotate 2s linear infinite;
  width: 24px;
  height: 24px;
  justify-self: center;
  align-self: center;

  & .path {
    stroke: ${colors.brandColor};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;


