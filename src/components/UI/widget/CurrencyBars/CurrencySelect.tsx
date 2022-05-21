import { RootState } from "../../../../app/store";
import {
  AmountInputContainer,
  AmountInput,
  CurrencySelectContainer,
  SelectedCurrencyContainer,
} from "../../../../styles/widget/CurrencyBars.styles";
import DropDownCurrecnyList from "./DropDownCurrencyList";
import {
  changeSelectView,
  setSendAmount,
} from "../../../../features/widget/widgetSlice";
import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import Spinner from "../Spinner";
import ExpandButton from "./ExpandButton";

type Props = {
  selectType: 'left' | 'right',
  disabled?: boolean,
}
const CurrencySelect = (props: Props) => {
  const mediaBreakpoint = "(max-width: 768px)";
  const dispatch = useAppDispatch();
  const currencyList = useAppSelector(
    (state: RootState) => state.widget.currencyList
  );

  const isExpanded = useAppSelector((state: RootState) =>
    props.selectType === "left"
      ? state.widget.leftSelectIsExpanded
      : state.widget.rightSelectIsExpanded
  );
  const selectedCurrency = useAppSelector((state: RootState) =>
    props.selectType === "left"
      ? state.widget.leftSelectCurrency
      : state.widget.rightSelectCurrency
  );
  const amount = useAppSelector((state: RootState) => state.widget.amount);
  const minimalAmount = useAppSelector(
    (state: RootState) => state.widget.minAmount
  );
  const estimatedAmount = useAppSelector(
    (state: RootState) => state.widget.estimatedAmount
  );

  const handleInput = (value) => {
    if (props.selectType === "left") {
      if(isNaN(value)) {
        dispatch(setSendAmount(''))
      } else {
        dispatch(setSendAmount(value));
      }
      
    }
    if (props.selectType === "right") {
      dispatch(setSendAmount(value));
    }
  };

  const handleValue = () => {
    if (props.selectType === "right") {
      if (amount < minimalAmount && amount) {
        return "—";
      } else if (estimatedAmount) {
        return estimatedAmount;
      } else {
        return '';
      }
    } else {
      if (amount === '') {
        return ''
      } else if (amount) {
        return amount 
      } else {
        return minimalAmount;
      }
    }
  };

  const isLeftCurrencyListExpanded = useAppSelector(
    (state: RootState) => state.widget.leftSelectIsExpanded
  );

  const setMarginBottom = () => {
    if (
      props.selectType === "left" &&
      isLeftCurrencyListExpanded &&
      window.matchMedia(mediaBreakpoint).matches
    ) {
      return "50%";
    } else {
      return 0;
    }
  };

  const expandCurrencyList = (event: MouseEvent) => {
    event.stopPropagation();
    if (selectedCurrency.ticker) {
      dispatch(changeSelectView(props.selectType));
    }
  };

  return (
    <CurrencySelectContainer
      style={{ marginBottom: setMarginBottom() }}
      onClick={(event: MouseEvent) => event.stopPropagation()}
    >
      {isExpanded && selectedCurrency.ticker ? (
        <DropDownCurrecnyList
          currencyList={currencyList}
          selectType={props.selectType}
        />
      ) : (
        <AmountInputContainer>
          {minimalAmount ? (
            <AmountInput
              onInput={(event: React.ChangeEvent<HTMLInputElement>) => handleInput(event.target.value)}
              disabled={props.disabled || false}
              value={handleValue()}
              type={props.selectType === "left" ? "text" : "text"}
            />
          ) : (
            <Spinner />
          )}
          <SelectedCurrencyContainer
            onClick={(event: MouseEvent) => expandCurrencyList(event)}
          >
            {selectedCurrency.ticker ? (
              <>
                <img src={selectedCurrency.image} alt="currency icon" />
                <span>{selectedCurrency.ticker.toUpperCase()}</span>
                <ExpandButton onClick={(e: any) => expandCurrencyList(e)} />
              </>
            ) : (
              <Spinner style={{ gridColumn: "2/3" }} />
            )}
          </SelectedCurrencyContainer>
        </AmountInputContainer>
      )}
    </CurrencySelectContainer>
  );
};

export default CurrencySelect;
