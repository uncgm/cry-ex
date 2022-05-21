import { useEffect } from "react";
import { API_KEY, BASE_URL, AVAILABLE_CURRENCIES } from "../../utils/constants";
import type { RootState } from "../../app/store";
import axios from "axios";
import {
  setCurrencyList,
  setEstimatedAmount,
  setMinAmount,
  setPairIsDisabled,
  setSelectCurrency,
  setSendAmount,
} from "../../features/widget/widgetSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export const CurrencyListFetcher = () => {
  const dispatch = useAppDispatch();
  const leftSelectCurrencyTicker = useAppSelector(
    (state: RootState) => state.widget.leftSelectCurrency
  );
  const righttSelectCurrencyTicker = useAppSelector(
    (state: RootState) => state.widget.rightSelectCurrency
  );

  useEffect(() => {
    async function fetchCrypto() {
      if (BASE_URL && AVAILABLE_CURRENCIES) {
        const res = await axios.get(BASE_URL + AVAILABLE_CURRENCIES);

        if (res.data) {
          dispatch(setCurrencyList(res.data));
          if (
            !leftSelectCurrencyTicker.ticker &&
            !righttSelectCurrencyTicker.ticker
          ) {
            dispatch(
              setSelectCurrency({
                type: "left",
                data: {
                  ticker: res.data[0].ticker,
                  name: res.data[0].name,
                  image: res.data[0].image,
                },
              })
            );
            dispatch(
              setSelectCurrency({
                type: "right",
                data: {
                  ticker: res.data[1].ticker,
                  name: res.data[1].name,
                  image: res.data[1].image,
                },
              })
            );
          }
        }
      }
    }
    fetchCrypto();
  }, []);
  return <></>;
};
export const EstimatedAmountFetcher = () => {
  const dispatch = useAppDispatch();

  const leftSelectCurrencyTicker = useAppSelector(
    (state: RootState) => state.widget.leftSelectCurrency.ticker
  );
  const rightSelectCurrencyTicker = useAppSelector(
    (state: RootState) => state.widget.rightSelectCurrency.ticker
  );
  const sendAmount = useAppSelector((state: RootState) => state.widget.amount);
  const minAmount = useAppSelector(
    (state: RootState) => state.widget.minAmount
  );

  const estimatedAmountUrl = () =>
    sendAmount
      ? `${BASE_URL}exchange-amount/${sendAmount}/${leftSelectCurrencyTicker}_${rightSelectCurrencyTicker}?api_key=${API_KEY}`
      : `${BASE_URL}exchange-amount/${minAmount}/${leftSelectCurrencyTicker}_${rightSelectCurrencyTicker}?api_key=${API_KEY}`;

  useEffect(() => {
    async function fetchEstimatedAmount() {
      try {
        if (minAmount) {
          const res = await axios.get(estimatedAmountUrl());
          if (res.data.estimatedAmount) {
            dispatch(setEstimatedAmount(res.data.estimatedAmount));
            dispatch(setPairIsDisabled(false))
          } else {
            dispatch(setPairIsDisabled(true))
          }
        }
      } catch (err) {
        dispatch(setEstimatedAmount('—'))
        console.log(err)
      }
    }
    fetchEstimatedAmount();
  }, [sendAmount, minAmount]);

  return <></>;
};



export const MinAmountFetcher = () => {
  const dispatch = useAppDispatch();

  const leftSelectCurrencyTicker = useAppSelector(
    (state: RootState) => state.widget.leftSelectCurrency.ticker
  );
  const rightSelectCurrencyTicker = useAppSelector(
    (state: RootState) => state.widget.rightSelectCurrency.ticker
  );

  const minAmountUrl = `${BASE_URL}min-amount/${leftSelectCurrencyTicker}_${rightSelectCurrencyTicker}?api_key=${API_KEY}`;

  useEffect(() => {
    async function fetchMinAmount() {
      try {
        if (leftSelectCurrencyTicker && rightSelectCurrencyTicker) {
          const res = await axios.get(minAmountUrl);
          if (res.data.minAmount) {
            dispatch(setMinAmount(res.data.minAmount));
            dispatch(setSendAmount(res.data.amount));
            dispatch(setPairIsDisabled(false))
          }
        }
      } catch (err) {
        dispatch(setMinAmount(''))
        dispatch(setPairIsDisabled(true)) 
      }
    }
    fetchMinAmount();
  }, [leftSelectCurrencyTicker, rightSelectCurrencyTicker]);
  return <></>;
};

const DataHandler = () => {
  return (
    <>
      <CurrencyListFetcher />
      <MinAmountFetcher />
      <EstimatedAmountFetcher />
    </>
  );
};

export default DataHandler;
