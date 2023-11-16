import PropTypes from 'prop-types';
import transaction from '../../transactions.json';

const Thead =() => {
  return (
    <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  )
}

const CardTransaction = ({type, amount, currency}) => {
  return (
    <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
  )
}

const Tbody = ({items}) => {
  return (
    <tbody>
     {items.map(({id, type, amount, currency}) => (
        <CardTransaction 
          key={id}
          type={type}
          amount={amount}
          currency={currency}
        />
     ))}
    </tbody>
  )
}

export const TransactionHistory = () => {
  return (
    <table className="transaction-history">
     <Thead /> 
     <Tbody items={transaction}/>
    </table>
  )
}

CardTransaction.propTypes = {
  type: PropTypes.string.isRequired, 
  amount: PropTypes.string.isRequired, 
  currency: PropTypes.string.isRequired
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired, 
      amount: PropTypes.string.isRequired, 
      currency: PropTypes.string.isRequired,
    })
  )
}