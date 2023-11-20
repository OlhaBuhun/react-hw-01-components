// import PropTypes from 'prop-types';
// import user from '../../user.json';
import { Profile } from 'components/Profile/Profile';
import { Stats } from 'components/Stats/Stats';
import { ProfileStyle } from './ProfileStats.styled';

export const ProfileStats = ({props}) => {
  return (
    <ProfileStyle className="profile">
    <Profile
      avatar={props.avatar} 
      username={props.username}
      tag={props.tag} 
      location={props.location}
     />
    <Stats
    followers={props.stats.followers} 
    views={props.stats.views}
    likes={props.stats.likes}
     />
    </ProfileStyle>
  )
}


// ProfileStats.propTypes = {
//   user: PropTypes.arrayOf(
//     PropTypes.exact({
//       avatar: PropTypes.string.isRequired,    
//       username: PropTypes.string.isRequired,    
//       tag: PropTypes.string.isRequired,    
//       location: PropTypes.string.isRequired
//       stats: PropTypes.arrayOf(
//         PropTypes.exact({
//            followers: PropTypes.number.isRequired,    
//            views: PropTypes.number.isRequired,    
//            likes: PropTypes.number.isRequired
//         })
//       )
//     })
//   )
// }
