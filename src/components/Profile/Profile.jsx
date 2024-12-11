
import style from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
    return (
      <div className={style.wrapper}>
        <div className={style.card}>
  <div>
    <img
      className={style.avatar}
      src={image}
      alt="User avatar"
    />
    <p className={style.name}>{name}</p>
    <p className={style.username}>@{tag}</p>
    <p className={style.location}>{location}</p>
  </div>

  <ul >
    <li className={style.stats}>
      <span>Followers</span>
      <span>{stats.followers}</span>
    </li>
    <li className={style.stats}>
      <span>Views</span>
      <span>{stats.views}</span>
    </li>
    <li className={style.stats}>
      <span>Likes</span>
      <span>{stats.likes}</span>
    </li>
  </ul>
  </div>
</div>

    )
}
    
export default Profile;