import { ExpandButtonContainer } from "../../../../styles/widget/CurrencyBars.styles";
import { darkGray } from "../../../../utils/color-constants";

type Props = {
  onClick: (event: MouseEvent) => void;
};

const ExpandButton = (props: Props) => {
  return (
    <ExpandButtonContainer onClick={((event: MouseEvent) => props.onClick(event))} viewBox="0 0 24 24" fill="none">
      <path fill="none" d="M24 24H0V0h24v24z" opacity=".87"/>
      <path fill={darkGray} d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/>
    </ExpandButtonContainer>
  );
};
export default ExpandButton;
