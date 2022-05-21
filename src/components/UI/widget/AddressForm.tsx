import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import {
  AddressInputContainer,
  AddressInputTitle,
  AdressInput,
  PairIsDisabledError,
} from "../../../styles/widget/AddressForm.styles";
import ExchangeButton from "./ExchangeButon";

const AddressForm = () => {
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.widget.rightSelectCurrency
  );

  const isLeftCurrencyListExpanded = useAppSelector(
    (state: RootState) => state.widget.leftSelectIsExpanded
  );
  const isRigthCurrencyListExpanded = useAppSelector(
    (state: RootState) => state.widget.rightSelectIsExpanded
  );

  const setZIndex = () =>
    isLeftCurrencyListExpanded || isRigthCurrencyListExpanded ? -10 : 1;
    
  const pairIsDisabled = useAppSelector(
    (state: RootState) => state.widget.pairIsDisabled
  );

  return (
    <AddressInputContainer style={{ zIndex: setZIndex() }}>
      <AddressInputTitle>
        Your {selectedCurrency.name} address
      </AddressInputTitle>
      <AdressInput type="text" />
      <ExchangeButton />
      {pairIsDisabled && (
        <PairIsDisabledError>This pair is disabled</PairIsDisabledError>
      )}
    </AddressInputContainer>
  );
};

export default AddressForm;
