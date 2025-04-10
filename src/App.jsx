import React from 'react'
import Profile from './components/profile/Profile';
import userData from './assets/userData.json';
import transactionData from './data/transactions.json';
import friends from './data/friends.json';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

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
            <hr />
            <TransactionHistory transaction={transactionData} />
        </>
    );
};

export default App;

