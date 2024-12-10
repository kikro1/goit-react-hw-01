import userData from '../../components/userData.json';

const Profile = () => {
    return (
        <div>
  <div>
    <img
      src={userData.avatar}
      alt="User avatar"
    />
    <p>{userData.username}</p>
    <p>@{userData.tag}</p>
    <p>{userData.location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>{userData.followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{userData.views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{userData.likes}</span>
    </li>
  </ul>
</div>

    )
}
    
export default Profile;