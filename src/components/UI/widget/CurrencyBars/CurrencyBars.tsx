import React from "react";
import CurrencySelect from "./CurrencySelect";
import SwapButton from "./SwapButton/SwapButton";
import { CurrencyBarsContainer } from "../../../../styles/widget/CurrencyBars.styles";
import { RootState } from "../../../../app/store";
import { setSelectCurrency } from "../../../../features/widget/widgetSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
const CurrencyBars = () => {
  const dispatch = useAppDispatch();
  const leftSelectCurrency = useAppSelector((state: RootState) => state.widget.leftSelectCurrency);
  const rightSelectCurrency = useAppSelector((state: RootState) => state.widget.rightSelectCurrency);

  const swapSelects = () => {
    const temp = leftSelectCurrency;
    dispatch(
      setSelectCurrency({ type: 'left', data: rightSelectCurrency })
    );
    dispatch(
      setSelectCurrency({ type: 'right', data: temp })
    );
  }
  
  return (
    <CurrencyBarsContainer>
      <CurrencySelect  selectType='left'/>
      <SwapButton onClick={() => swapSelects()}/>
      <CurrencySelect selectType='right' disabled={true} />
    </CurrencyBarsContainer>
  );
};

export default CurrencyBars;
