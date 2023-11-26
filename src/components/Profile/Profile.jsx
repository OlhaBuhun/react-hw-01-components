import PropTypes from 'prop-types';
import { ProfileStyle, ProfileStyleContainer, Avatar, Username, StatsStyle} from './Profile.styled';



export const Profile = ({avatar, username, tag, location, stats: { followers, views, likes }}) => {
  return (
    <ProfileStyle >
    <ProfileStyleContainer >
      <Avatar
      src={avatar}
      alt={username}
      />
      <Username >{username}</Username>
      <p>@{tag}</p>
      <p >{location}</p>
    </ProfileStyleContainer>
    <StatsStyle >
      <li>
        <span >Followers</span>
        <span >{followers}</span>
      </li>
      <li>
        <span >Views</span>
        <span >{views}</span>
      </li>
      <li>
        <span >Likes</span>
        <span >{likes}</span>
     </li>
    </StatsStyle>
    </ProfileStyle>
  )
}


Profile.propTypes = {
      avatar: PropTypes.string.isRequired,    
      username: PropTypes.string.isRequired,    
      tag: PropTypes.string.isRequired,    
      location: PropTypes.string.isRequired,
      followers: PropTypes.number.isRequired,    
      views: PropTypes.number.isRequired,    
      likes: PropTypes.number.isRequired
}
