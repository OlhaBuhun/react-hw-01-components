import styled from 'styled-components';

export const ProfileStyle = styled.div `
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin: 40px;
  width: 400px;
`

export const ProfileStyleContainer = styled.div `
  /* margin-bottom: 20px; */
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;  
  /* width: 400px; */
  background-color: yellowgreen;
  border-radius: 4px;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  
`

export const Avatar = styled.img `
  width: 300px;
`
export const Username = styled.p `
  font-size: 24px;
  color: black;
`

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