import styled from 'styled-components'
import * as colors from '../../utils/color-constants'

export const CurrencyBarsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: grid;
    justify-items: center;
  }
`

export const AmountInputContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 35%;
  width: 450px;
  height: 50px;
  background-color: ${colors.lightGray};
  border-radius: 7px;
  border-color: ${colors.darkGray};
  border-style: solid;
  border-width: 1px;
  outline: none;

  [type=number] {
    -moz-appearance:textfield;
    -webkit-appearance: textfield;
    appearance: textfield;
  }

  @media (max-width: 992px) and (min-width: 767px) {
    width: 370px;
  }

  @media (max-width: 575px)  {
    width: 300px;
  }
`

export const AmountInput = styled.input`
  margin-left: 15px;
  height: 44px;
  font-size: 16px;
  background-color: inherit;
  color: ${colors.darkGray};;
  border: none;
  outline: none;
  border-width: 1px;
  
  -webkit-text-fill-color: ${colors.darkGray};;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const SelectedCurrencyContainer = styled.span`
  display: grid;
  grid-gap: 2%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column: 2/3;
  align-items: center;
  border-left: solid;
  border-width: 1px;
  border-image: linear-gradient(to top, ${colors.lightGray}, ${colors.lightGray}, ${colors.darkGray}, ${colors.darkGray}, ${colors.darkGray}, ${colors.lightGray}, ${colors.lightGray}) 1;  

  img {
    grid-column: 1/2;
    width: 50%;
    justify-self: center;
    filter: grayscale(100%) sepia(100%) hue-rotate(90deg);
    overflow: hiddden;  
  }


`
export const CurrencySelectContainer = styled.div`
`
export const SearchInputContainer = styled.div`
  display: grid;
  width: 450px;
  height: 50px;
  background-color: ${colors.lightGray};
  border-radius: 7px;
  border-color: ${colors.darkGray};
  border-style: solid;
  border-width: 1px;
  outline: none;
  @media (max-width: 992px) and (min-width: 767px) {
    width: 370px;
  }

  @media (max-width: 575px)  {
    width: 300px;
  }
`

export const SearchInput = styled.input`
  margin-left: 15px;
  width: 290px;
  height: 44px;
  font-size: 16px;
  background-color: inherit;
  color: ${colors.darkGray};;
  border: none;
  outline: none;
  border-width: 1px;

`

export const DropDownCurrecnyListContainer = styled.div`
  grid-row: 2/3;
  grid-column: 1/3;
  height: 194px;
  overflow: scroll;
  scrollbar-width: none;
  border-width: 1px;
  border-radius: 0px 0px 7px 7px;
  border-color: ${colors.darkGray};
  border-style: solid;
  background-color: ${colors.lightGray};
`

export const CurrencyDataContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 30% 50%;
  align-items: center;
  width: auto;
  height: 48px;
  background-color: ${colors.lightGray};
  outline: none;

  img {
    justify-self: center;
    width: 50%;
    filter: grayscale(100%) sepia(100%) hue-rotate(90deg); 
  }

  span {
    overflow: hidden;
  }

  :hover {
    background-color: #137E6E 
  }
`
export const SwapButtonIconContainer = styled.span`
  align-self: center;

  @media (max-width: 768px) { 
    justify-self: end; 
    transform: rotate(0.25turn);
    margin: 2%;
  }
`

export const SwapButtonIcon = styled.svg.attrs({
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  width: 24px;
  height: 24px;
`

export const ExpandButtonContainer = styled.svg.attrs({
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  width: 70%;
  height: 70%;
`
export const CloseButtonContainer = styled.svg.attrs({
  version: '1.1', 
  xmlns: 'http://www.w3.org/2000/svg', 
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})`
  justify-self: end;
  align-self: center;
  grid-column: 2/3;
  width: 55%;
  height: 55%;
`