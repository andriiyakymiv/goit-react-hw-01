import style from './Profile.module.css';

const Profile = ({name, tag, location, image, stats }) => {
    return (
        <div className={style.card}>
            <div className={style.card__header}>
                <img
                    src={image}
                    alt="User avatar"
                />
                <h2>{name}</h2>
                <p>{tag}</p>
                <p>{location}</p>
            </div>

            <ul className={style.card__list}>
                <li className={style.stat}>
                    <span>Followers</span>
                    <span className={style.value}>{stats.followers}</span>
                </li>
                <li className={style.stat}>
                    <span>Views</span>
                    <span className={style.value}>{stats.views}</span>
                </li>
                <li className={style.stat}>
                    <span>Likes</span>
                    <span className={style.value}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
};

export default Profile;