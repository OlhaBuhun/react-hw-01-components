import PropTypes from 'prop-types';
import user from '../../user.json';
import { ProfileCard } from 'components/ProfileCard/ProfileCard';
import { Stats } from 'components/ProfileStats/ProfileStats';
import { ProfileStyle } from './Profile.styled';

export const Profile = () => {
  return (
    <ProfileStyle className="profile">
    <ProfileCard
      avatar={user.avatar} 
      username={user.username}
      tag={user.tag} 
      location={user.location}
     />
    <Stats
    followers={user.stats.followers} 
    views={user.stats.views}
    likes={user.stats.likes}
     />
    </ProfileStyle>
  )
}


Profile.propTypes = {
  user: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,    
      username: PropTypes.string.isRequired,    
      tag: PropTypes.string.isRequired,    
      location: PropTypes.string.isRequired,
      stats: PropTypes.arrayOf(
        PropTypes.exact({
           followers: PropTypes.number.isRequired,    
           views: PropTypes.number.isRequired,    
           likes: PropTypes.number.isRequired
        })
      )
    })
  )
}
