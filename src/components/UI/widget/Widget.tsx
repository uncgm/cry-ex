import CurrencyBars from "./CurrencyBars/CurrencyBars";
import AddressForm from "./AddressForm";
import {
  WidgetContainer,
  MainTitle,
  SubTitle,
} from "../../../styles/widget/Widget.styles";
import { MAIN_TITLE, SUB_TITLE } from "../../../utils/constants";
import { changeSelectView } from "../../../features/widget/widgetSlice";
import DataHandler from "../../Fetcher/DataHandler";
import { useAppDispatch } from "../../../app/hooks";

export default function Widget() {
  const dispatch = useAppDispatch();

  return (
    <WidgetContainer
      onClick={() => {
        dispatch(changeSelectView("both"));
      }}
    >
      <MainTitle>{MAIN_TITLE}</MainTitle>
      <SubTitle>{SUB_TITLE}</SubTitle>
      <CurrencyBars />
      <AddressForm />
      <DataHandler />
    </WidgetContainer>
  );
}
