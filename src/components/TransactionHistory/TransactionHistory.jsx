import PropTypes from 'prop-types';
import { CardTransactionStyled, TbodyStyled, TheadStyled, TransactionHistoryStyled } from './TransactionHistory.styled';



export const TransactionHistory = ({items}) => {
  return (
    <TransactionHistoryStyled >
      <thead>
    <tr>
      <TheadStyled>Type</TheadStyled>
      <TheadStyled>Amount</TheadStyled>
      <TheadStyled>Currency</TheadStyled>
    </tr>
  </thead> 
 <tbody>
    {items.map(({id, type, amount, currency}) => (
        <TbodyStyled key={id}> 
          <CardTransactionStyled>{type}</CardTransactionStyled>
          <CardTransactionStyled>{amount}</CardTransactionStyled>
          <CardTransactionStyled>{currency}</CardTransactionStyled>
        </TbodyStyled>
     ))}
    </tbody>
    </TransactionHistoryStyled>
  )
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