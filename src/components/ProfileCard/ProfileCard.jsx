import PropTypes from 'prop-types';
import { Avatar, ProfileStyleContainer, Username } from './ProfileCard.styled';



export const ProfileCard =({avatar, username, tag, location}) => {
  return (
    <ProfileStyleContainer >
      <Avatar
      src={avatar}
      alt={username}
      />
      <Username >{username}</Username>
      <p>@{tag}</p>
      <p >{location}</p>
</ProfileStyleContainer>
  )
}

ProfileCard.propTypes = {
  avatar: PropTypes.string.isRequired,    
  username: PropTypes.string.isRequired,    
  tag: PropTypes.string.isRequired,    
  location: PropTypes.string.isRequired
}