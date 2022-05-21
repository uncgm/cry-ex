import { SwapButtonIconContainer, SwapButtonIcon } from '../../../../../styles/widget/CurrencyBars.styles'
import { brandColor } from '../../../../../utils/color-constants'

type Props = {
  onClick: (event: MouseEvent) => void;
};

const SwapButton = (props: Props) => {
  
  return (
    <SwapButtonIconContainer onClick={((e: MouseEvent) => props.onClick(e))}>
      <SwapButtonIcon viewBox="0 0 24 24" fill="none">
      <path d="M7.99 17H20V19H7.99V22L4 18L7.99 14V17Z" fill={brandColor}/>
      <path d="M16.01 8H4V10H16.01V13L20 9L16.01 5V8Z" fill={brandColor}/>
      </SwapButtonIcon>
    </SwapButtonIconContainer>
  )
} 
export default SwapButton