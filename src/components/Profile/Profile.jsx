import PropTypes from 'prop-types';
import {
  Profile,
  Description,
  StatsUser,
  NameTitle,
  StatItem,
  Quantity,
} from './Profile.styled';

export const ProfileUser = ({ username, tag, location, avatar, stats }) => {
  return (
    <Profile>
      <Description>
        <img src={avatar} alt={username} width="250px" />
        <NameTitle>{username}</NameTitle>
        <p>@{tag}</p>
        <p>{location}</p>
      </Description>

      <StatsUser>
        <StatItem>
          <span>Followers</span>
          <Quantity>{stats.followers}</Quantity>
        </StatItem>
        <StatItem>
          <span>Views</span>
          <Quantity>{stats.views}</Quantity>
        </StatItem>
        <StatItem>
          <span>Likes</span>
          <Quantity>{stats.likes}</Quantity>
        </StatItem>
      </StatsUser>
    </Profile>
  );
};

ProfileUser.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
