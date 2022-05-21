import React from "react";
import { SpinnerContainer } from "../../../styles/widget/Widget.styles";

type Props = {
  style?: React.CSSProperties,
}

const Spinner = (props: Props) => (
  <SpinnerContainer style={props.style} viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </SpinnerContainer>
);
export default Spinner;
