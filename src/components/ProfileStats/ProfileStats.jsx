import PropTypes from 'prop-types';
import { StatsStyle } from './ProfileStats.styled';

export const Stats = ({followers, views, likes}) => {
  return (
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
  )
}

Stats.propTypes = {
  followers: PropTypes.number.isRequired,    
  views: PropTypes.number.isRequired,    
  likes: PropTypes.number.isRequired,    
}