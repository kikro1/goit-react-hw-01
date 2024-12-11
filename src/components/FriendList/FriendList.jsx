import FriendListItem from './FriendListItem';
import style from '../FriendList/FriendsListItem.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={style.wrapper}>
            {friends.map(friend => (
                
                <li key={friend.id}>
                <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}/>
            </li>
            ))}
	
</ul>
    )
}

export default FriendList;