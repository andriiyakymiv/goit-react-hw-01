import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css";

const FriendList = ({ friendsData }) => {
  return (
    <ul className={style.friends__list}>
      {friendsData.map(({avatar, name,isOnline,id }) => {
        return (
          <li key={id} className={style.friends__item}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        )
      })}
    </ul>
  );
};

export default FriendList;