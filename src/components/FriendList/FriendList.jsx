// import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem.jsx';
import friends from '../../friends.json';


export const FriendList = ()=> {
  return (
    <ul >
    {friends.map(({id, avatar, name, isOnline}) => (
      <FriendListItem 
      key={id}
      avatar={avatar}
      name={name}
      isOnline={isOnline}
      />
    ))}
  </ul>
  )
}
console.log(FriendList());