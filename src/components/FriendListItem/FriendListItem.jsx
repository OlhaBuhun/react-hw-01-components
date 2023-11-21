import PropTypes from 'prop-types';
import { AvatarFriend, Item, Statys } from './FriendListItem.styled';

  export const FriendListItem = ({avatar, name, isOnline} ) => {
    return (
      <Item >
        <Statys isOnline={isOnline}></Statys>
        <AvatarFriend 
        src={avatar} 
        alt={name} 
        />
        <p className="name">{name}</p>
      </Item>
    )
}



FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}