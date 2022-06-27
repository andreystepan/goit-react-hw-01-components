import PropTypes from 'prop-types'

const TransactionItem = ({type,amount,currency}) => {
    return (
        <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
    </tr>
    )
}

export const TransactionHistory = ({ transactions }) => {
    return (
        <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
                {transactions.map(transaction => {
                    return (
                        <TransactionItem
                            key={transaction.id}
                            type={transaction.type}
                            amount={transaction.amount}
                            currency={transaction.currency} />
        )
    })}
  </tbody>
</table>
    )
}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

TransactionHistory.propTypes = {
    transactions: PropTypes.array.isRequired
}