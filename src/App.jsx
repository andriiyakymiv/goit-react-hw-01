import React from 'react'
import Profile from './components/profile/Profile';
import userData from './assets/userData.json';
import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList';

export const App = () => {
    return (
        <>
            <Profile
                name={userData.username}
                tag={userData.tag}
                location={userData.location}
                image={userData.avatar}
                stats={userData.stats}
            />
            <br />
            <FriendList friendsData={friends} />
        </>
    );
};

export default App;

