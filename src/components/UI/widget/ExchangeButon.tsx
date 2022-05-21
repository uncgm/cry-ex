import React from "react";
import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import {
  ExchangeButtonContainer,
  ExchangeButtonStyle,
} from "../../../styles/widget/AddressForm.styles";

const EXCHANGE_BUTTON_TEXT = "EXCHANGE";

const ExchangeButton = () => {
  const pairIsDisabled = useAppSelector(
    (state: RootState) => state.widget.pairIsDisabled
  );

  return (
    <ExchangeButtonContainer>
      {pairIsDisabled ? (
          <ExchangeButtonStyle style={{filter: 'contrast(70%)'}}>{EXCHANGE_BUTTON_TEXT}</ExchangeButtonStyle>
      ) : (
        <ExchangeButtonStyle>{EXCHANGE_BUTTON_TEXT}</ExchangeButtonStyle>
      )}
    </ExchangeButtonContainer>
  );
};

export default ExchangeButton;
