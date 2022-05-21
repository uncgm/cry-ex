import styled from 'styled-components'
import * as colors from '../../utils/color-constants'

export const AddressInputContainer = styled.div`
  display: grid;
  justify-content: space-between;
  
  @media (max-width: 768px) {
    display: flex; 
    width: 450px;
    flex-wrap: wrap;   
  }
  
  @media (max-width: 575px)  {
    width: 300px;
  }
`

export const AddressInputTitle = styled.p`
  margin-top: 40px;
  grid-column-start: 1;
  grid-column-end: 4;
`

export const AdressInput = styled.input`
  width: 723px;
  height: 52px;
  font-size: 16px;
  background-color: ${colors.lightGray};
  border-radius: 8px;
  border-color: ${colors.darkGray};
  border-style: solid;
  border-width: 1px;
  outline: none;
  box-sizing: border-box;
  padding-left: 15px;

  @media (max-width: 992px) and (min-width: 767px) {
    width: 300%;
  }
`

export const ExchangeButtonContainer = styled.div`
  display: grid;
  height: 52px;
  grid-column: 3/4;


  @media (max-width: 768px) {
    width: 450px;
    flex-wrap: wrap;   
    justify-items: center;
  }
`

export const ExchangeButtonStyle = styled.button`
  color: #FFFF;
  font-weight: 700;
  font-size: 16px;
  height: inherit;
  width: 205px;
  background-color: ${colors.brandColor};
  border-radius: 5px;
  outline: none;
  border: none;

  @media (max-width: 768px) {  
    justify-items: center;
    width: 450px;
    height: 50px;
    margin-top: 2%;
  }

  @media (max-width: 575px)  {
    width: 300px;
  }

`
export const PairIsDisabledError = styled.p`
  color: #E03F3F;
  grid-column: 3/4;
  justify-self: center;
  margin: 2%;

  @media (max-width: 768px) {  
    margin-left: auto;
    margin-right: auto;
  }
`


