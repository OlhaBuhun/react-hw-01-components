import PropTypes from 'prop-types';
import { Item, Statys } from './FriendListItem.styled';

  export const FriendListItem = ({avatar, name, isOnline} ) => {
    return (
      <Item >
        <Statys isOnline={isOnline}></Statys>
        <img 
        className="avatar" 
        src={avatar} 
        alt={name} 
        width="48" 
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