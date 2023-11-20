// import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem.jsx';
import friends from '../../friends.json';
import { FriendListStyle } from './FriendList.styled';


export const FriendList = ()=> {
  return (
    <FriendListStyle >
    {friends.map(({id, avatar, name, isOnline}) => (
      <FriendListItem 
      key={id}
      avatar={avatar}
      name={name}
      isOnline={isOnline}
      />
    ))}
  </FriendListStyle>
  )
}
console.log(FriendList());
