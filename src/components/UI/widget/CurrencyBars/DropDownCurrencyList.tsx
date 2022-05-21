import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import { RootState } from "../../../../app/store";
import {
  setSelectCurrency,
  changeSelectView,
} from "../../../../features/widget/widgetSlice";
import {
  SearchInput,
  SearchInputContainer,
  CurrencyDataContainer,
  DropDownCurrecnyListContainer,
} from "../../../../styles/widget/CurrencyBars.styles";
import { CurrencyState } from "../../../../utils/types";
import CloseButton from "./CloseButton";

const DropDownCurrecnyList = (props: any) => {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState('');
  const leftSelectCurrency = useAppSelector((state: RootState) => state.widget.leftSelectCurrency);
  const rightSelectCurrency = useAppSelector((state: RootState) => state.widget.rightSelectCurrency);

  const getCurrentSellectState = () => props.selectType === 'right' ? rightSelectCurrency : leftSelectCurrency;
  const getAnotherSellectStateTicker = () => props.selectType === 'left' ? rightSelectCurrency.ticker : leftSelectCurrency.ticker;

  const filteredCurrencies = (function () {
    const currentState = getCurrentSellectState();
    if (props.currencyList)
      return props.currencyList.filter(
        (e: CurrencyState) =>
          (e.ticker.includes(search.toLowerCase()) ||
          e.name.includes(search.toLowerCase())) && (e.ticker !== currentState.ticker)
      );
  })();

  const selectCurrency = (ticker: string, name: string, image: string) => {
    const temp = getCurrentSellectState();
    dispatch(
      setSelectCurrency({ type: props.selectType, data: { ticker, name, image } })
    );

    if (getAnotherSellectStateTicker() === ticker) {
      dispatch(
        setSelectCurrency({ type: props.selectType === 'right' ? 'left' : 'right', data: { ...temp } })
      );
    }
    dispatch(changeSelectView(props.selectType));
  };

  return (
    <SearchInputContainer>
      <SearchInput
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value);
        }}
        placeholder='Search'
      />
      <CloseButton onClick={(event: MouseEvent) => {
              event.stopPropagation();
              dispatch(changeSelectView(props.selectType));
            }}/>
      <DropDownCurrecnyListContainer>
        {props.currencyList
          ? filteredCurrencies.map((e: CurrencyState) => (
              <CurrencyDataContainer
                key={Math.random()}
                onClick={() => selectCurrency(e.ticker, e.name, e.image)}
              > 
                <img src={e.image} alt='currency icon'/>
                <span>{e.ticker.toUpperCase()}</span>
                <span>{e.name}</span>
              </CurrencyDataContainer>
            ))
          : null}
      </DropDownCurrecnyListContainer>
    </SearchInputContainer>
  );
};

export default DropDownCurrecnyList;
