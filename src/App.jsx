import './App.css'
import Profile from './components/Profile/Profile';
import userData from './userData.json';
import FriendList from './components/FriendList/FriendList';
import friendsData from './friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory'
import transactionsData from './transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData.friends} />
      <TransactionHistory items={transactionsData.transactions} />
    </>
  );
};


export default App;
