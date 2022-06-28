import PropTypes from 'prop-types'
import { TableTransactions, TheadTable, TdTable } from './TransactionHistory.styled'

const TransactionItem = ({type,amount,currency}) => {
    return (
        <tr>
            <TdTable>{type}</TdTable>
            <TdTable>{amount}</TdTable>
            <TdTable>{currency}</TdTable>
    </tr>
    )
}

export const TransactionHistory = ({ transactions }) => {
    return (
        <TableTransactions>
  <thead>
    <tr>
      <TheadTable>Type</TheadTable>
      <TheadTable>Amount</TheadTable>
      <TheadTable>Currency</TheadTable>
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
</TableTransactions>
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