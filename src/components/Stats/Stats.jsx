import PropTypes from 'prop-types';
import { StatsStyle } from './Stats.styled';

export const Stats = ({followers, views, likes}) => {
  return (
    <StatsStyle >
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
     </li>
    </StatsStyle> 
  )
}

Stats.propTypes = {
  followers: PropTypes.number.isRequired,    
  views: PropTypes.number.isRequired,    
  likes: PropTypes.number.isRequired,    
}