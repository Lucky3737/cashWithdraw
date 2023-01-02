// Write your code here

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onSubtraction = value => {
    this.setState(preState => ({amount: preState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="app">
        <div className="card">
          <div className="profile-card">
            <div className="profile">
              <h1 className="profileName">S</h1>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance">
            <p className="headingBalance">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="amount">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denomination-list">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                denominationsDetails={eachDenomination}
                key={eachDenomination.id}
                onSubtraction={this.onSubtraction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
