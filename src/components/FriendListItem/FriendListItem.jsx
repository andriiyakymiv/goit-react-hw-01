import style from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <img src={avatar} alt="Avatar" width="68" />
            <p>{name}</p>
            {isOnline ? <p className={style.online}>Online</p> :<p className={style.offline}>Offline</p>}
        </>
    );
};

export default FriendListItem;