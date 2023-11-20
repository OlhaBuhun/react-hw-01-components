import styled from 'styled-components';

export const Item = styled.li `
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
  padding: 15px;
  width: 400px;
  border-radius: 4px;
  background-color: #03a9f4;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

    p {
    font-size: 30px;
  }
`

export const Statys = styled.span `
  background-color: ${({isOnline}) => (isOnline ?'blue': 'red')};
  width: 16px;
  border-radius: 50%;
  height: 16px;
`

