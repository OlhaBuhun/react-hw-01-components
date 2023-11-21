import styled from 'styled-components';

export const TransactionHistoryStyled = styled.table `
  border: 1px solid #eee;
	table-layout: fixed;
	width: 100%;
	margin-bottom: 20px;
`

export const TheadStyled = styled.th `
  font-weight: bold;
	padding: 5px;
	background: #efefef;
	border: 1px solid #dddddd;
`

export const CardTransactionStyled = styled.td `
  padding: 5px 10px;
	border: 1px solid #eee;
	text-align: left;
`

export const TbodyStyled = styled.tr `
  /* background-color: grey; */
  &:nth-child(odd){
    background: #fff;
  };

  &:nth-child(even){
	background: #F7F7F7;
};
`