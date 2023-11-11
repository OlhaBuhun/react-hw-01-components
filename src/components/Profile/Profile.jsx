import PropTypes from 'prop-types';
import user from '../../user.json';
import { Stats } from 'components/ProfileStats/ProfileStats';

// console.log(user);

export const Profile =() => {
  return (
    <div className="profile">
      <div className="description">
      <img
      src={user.avatar}
      alt={user.username}
      className="avatar"
      />
      <p className="name">{user.username}</p>
      <p className="tag">@{user.tag}</p>
      <p className="location">{user.location}</p>
    </div>
      <Stats />
</div>
  )
}

console.log(Profile());