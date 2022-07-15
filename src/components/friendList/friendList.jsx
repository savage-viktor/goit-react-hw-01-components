import PropTypes from 'prop-types';
import css from './friendList.module.css';

export const FriendList = props => {
  return (
    <ul className={css.friend_list}>
      {props.friends.map(friend => (
        <li key={friend.name} className={css.item}>
          <span
            className={
              css.status +
              ' ' +
              (friend.isOnline ? css.isOnline : css.isOffline)
            }
          ></span>
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
