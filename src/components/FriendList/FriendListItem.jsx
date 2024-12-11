import clsx from 'clsx';
import style from './FriendsListItem.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {


    return (
        <div className={style.wrapper}>
         <div className={style.card}>
             <img src={avatar} alt="Avatar" width="48" />
             <p className={style.cardName}>{name}</p>
         
             <p className={clsx(style.status, isOnline ? style.green : style.red)}>{isOnline ? 'Online' : 'Offline'}</p>
         </div>
        </div>

    )
}
export default FriendListItem;