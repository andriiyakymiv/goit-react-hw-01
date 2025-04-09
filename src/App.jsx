import React from 'react'
import Profile from './components/profile/Profile';
import userData from './assets/userData.json';

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
        </>
    );
};

export default App;

