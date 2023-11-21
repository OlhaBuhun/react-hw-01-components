import PropTypes from 'prop-types';
import transaction from '../../transactions.json';
import { CardTransactionStyled, TbodyStyled, TheadStyled, TransactionHistoryStyled } from './TransactionHistory.styled';

const Thead =() => {
  return (
    <thead>
    <tr>
      <TheadStyled>Type</TheadStyled>
      <TheadStyled>Amount</TheadStyled>
      <TheadStyled>Currency</TheadStyled>
    </tr>
  </thead>
  )
}

const CardTransaction = ({type, amount, currency}) => {
  return (
    <TbodyStyled>
        <CardTransactionStyled>{type}</CardTransactionStyled>
        <CardTransactionStyled>{amount}</CardTransactionStyled>
        <CardTransactionStyled>{currency}</CardTransactionStyled>
      </TbodyStyled>
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
    <TransactionHistoryStyled >
     <Thead /> 
     <Tbody items={transaction}/>
    </TransactionHistoryStyled>
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