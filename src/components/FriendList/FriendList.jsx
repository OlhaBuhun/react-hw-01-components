import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem.jsx';
import { FriendListStyle } from './FriendList.styled';


export const FriendList = ({friends})=> {
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  )
}
