import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CurrencyState, SelectedCurrencyPayload, WidgetState } from "../../utils/types";

const initialState: WidgetState = {
  amount: '',
  minAmount: '',
  estimatedAmount: '',
  leftSelectIsExpanded: false,
  rightSelectIsExpanded: false,
  leftSelectCurrency: {
    ticker: '',
    name: '',
    image: '',
  },
  rightSelectCurrency: {
    ticker: '',
    name: '',
    image: '',
  },
  currencyList: [],
  pairIsDisabled: false,
};

export const widgetSlice = createSlice({
  name: "widget",
  initialState,
  reducers: {
    setSendAmount: (state, action: PayloadAction<WidgetState['amount']>) => {
        state.amount = action.payload;
    },
    setMinAmount: (state, action: PayloadAction<WidgetState['minAmount']>) => {
      state.minAmount = action.payload;
    },
    setEstimatedAmount: (state, action: PayloadAction<WidgetState['estimatedAmount']>) => {
      state.estimatedAmount = action.payload;
    },
    setPairIsDisabled: (state, action: PayloadAction<WidgetState['pairIsDisabled']>) => {
      state.pairIsDisabled = action.payload;
    },
    setCurrencyList: (state, action: PayloadAction<CurrencyState[]>) => {
      state.currencyList = action.payload;
    },
    setSelectCurrency: (
      state,
      action: PayloadAction<SelectedCurrencyPayload>
    ) => {
      switch (action.payload.type) {
        case "left":
          state.leftSelectCurrency = action.payload.data;
          break;
        case "right":
          state.rightSelectCurrency = action.payload.data;
          break;
        default:
          break;
      }
    },
    changeSelectView: (state, action: PayloadAction<string>) => {
      switch (action.payload) {
        case "left":
          state.leftSelectIsExpanded = !state.leftSelectIsExpanded;
          if (state.rightSelectIsExpanded) {
            state.rightSelectIsExpanded = false;
          }
          break;
        case "right":
          state.rightSelectIsExpanded = !state.rightSelectIsExpanded;
          if (state.leftSelectIsExpanded) {
            state.leftSelectIsExpanded = false;
          }
          break;
        case "both":
          state.rightSelectIsExpanded = false;
          state.leftSelectIsExpanded = false;
          break;
        default:
          break;
      }
    },
  },
});

export const {
  setSendAmount,
  setMinAmount,
  setEstimatedAmount,
  setPairIsDisabled,
  setCurrencyList,
  setSelectCurrency,
  changeSelectView,
} = widgetSlice.actions;
export default widgetSlice.reducer;
