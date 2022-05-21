export interface CurrencyState {
  ticker: string;
  name: string;
  image: string;
  [otherOptions: string]: unknown;
}

export interface WidgetState {
  amount: number | '';
  minAmount: number | '';
  estimatedAmount: number | '' | '—';
  leftSelectIsExpanded: boolean;
  rightSelectIsExpanded: boolean;
  leftSelectCurrency: CurrencyState;
  rightSelectCurrency: CurrencyState;
  currencyList: CurrencyState[];
  pairIsDisabled: boolean;
}

export interface SelectedCurrencyPayload {
  type: string;
  data: CurrencyState;
}

