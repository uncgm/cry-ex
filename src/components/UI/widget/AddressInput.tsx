import '../../../styles/Widget.css'
const text = "CHANGE"

const AddressInput = () => {
  return (
    <div>
      <p>Your {text} address</p>
      <input className="address-input" />
    </div>
  )
}

export default AddressInput;