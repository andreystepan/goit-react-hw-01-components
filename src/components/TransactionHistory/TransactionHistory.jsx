import PropTypes from 'prop-types';
import {
  TableTransactions,
  TheadTable,
  TdTable,
} from './TransactionHistory.styled';

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
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <TdTable>{type}</TdTable>
              <TdTable>{amount}</TdTable>
              <TdTable>{currency}</TdTable>
            </tr>
          );
        })}
      </tbody>
    </TableTransactions>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
