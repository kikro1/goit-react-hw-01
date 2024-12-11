import style from './FriendsListItem.module.css'
const FriendListItem = ({ avatar, name, isOnline }) => {

    const statusClass = isOnline ? style.online : style.offline;
    const statusText = isOnline ? "Online" : "Offline";
    const statusColor = isOnline ? style.green : style.red;

    return (
         <div className='card'>
             <img src={avatar} alt="Avatar" width="48" />
             <p>{name}</p>
             <p style={{ color: statusColor }} className='statusClass'>{statusText}</p>
         </div>

    )
}
export default FriendListItem;