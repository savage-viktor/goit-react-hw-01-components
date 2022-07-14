import css from "./profile.module.css";

export const Profile = (props) => {

const {name, tag, location, avatar, followers, views, likes} = props
    return (
        <div className={css.profile}>
        <div className={css.description}>
          <img
            src={avatar}
            alt={tag}
            className={css.avatar}
          />
          <p className={css.name}>{name}</p>
          <p className={css.tag}>@{tag}</p>
          <p className={css.location}>{location}</p>
        </div>
      
        <ul className={css.stats}>
          <li className={css.stats_item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.stats_item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.stats_item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  