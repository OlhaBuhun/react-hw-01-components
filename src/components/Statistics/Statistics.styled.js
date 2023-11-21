import styled from 'styled-components';

export const StatisticsStyled = styled.section `
  display: flex;
  flex-direction: column;
  width: 400px;
  /* align-items: center; */
`

export const StatsStyled = styled.ul `
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  list-style: none;
`

const randomColor = ()=> {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const CardStatsStyled = styled.li `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    padding: 15px;
    background-color: ${randomColor};

    span {
      margin-bottom: 5px;
      font-size: 20px;
    }
`

export const TitleStatististicsStyled = styled.h2 `
  text-align: center;
  font-size: 30px;
  color: #ffffff;
  text-shadow: 2px 2px 4px #000000;
`

