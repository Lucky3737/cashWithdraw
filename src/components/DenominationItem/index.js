// Write your code here

import './index.css'

const DenominationItem = props => {
  const {denominationsDetails, onSubtraction} = props

  const {value} = denominationsDetails

  const subtractionValue = () => {
    onSubtraction(value)
  }

  return (
    <li className="list_con">
      <button type="button" className="value" onClick={subtractionValue}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
