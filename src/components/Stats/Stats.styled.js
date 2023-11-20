import styled from 'styled-components';

export const StatsStyle = styled.ul `
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  flex-wrap: wrap;
  padding: 0;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: green;
    width: 33%;
    padding: 5px 0px;
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);   
  }
`
