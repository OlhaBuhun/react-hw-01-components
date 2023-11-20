import PropTypes from 'prop-types';
import { ProfileStyleContainer } from './Profile.styled';



export const Profile =({avatar, username, tag, location}) => {
  return (
    <ProfileStyleContainer className="profile">
      <div className="description">
      <img
      src={avatar}
      alt={username}
      className="avatar"
      />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>
</ProfileStyleContainer>
  )
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,    
  username: PropTypes.string.isRequired,    
  tag: PropTypes.string.isRequired,    
  location: PropTypes.string.isRequired
}