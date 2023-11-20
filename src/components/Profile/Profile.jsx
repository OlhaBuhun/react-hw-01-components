import PropTypes from 'prop-types';
import { Avatar, ProfileStyleContainer, Username } from './Profile.styled';



export const Profile =({avatar, username, tag, location}) => {
  return (
    <ProfileStyleContainer >
      <Avatar
      src={avatar}
      alt={username}
      className="avatar"
      />
      <Username >{username}</Username>
      <p>@{tag}</p>
      <p >{location}</p>
</ProfileStyleContainer>
  )
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,    
  username: PropTypes.string.isRequired,    
  tag: PropTypes.string.isRequired,    
  location: PropTypes.string.isRequired
}