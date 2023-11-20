import { FriendList } from "./FriendList/FriendList";
// import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
// import { ProfileStats } from "./ProfileStats/ProfileStats";
// import { Statistics } from "./Statistics/Statistics";
// import user from '../user.json';
// import transaction from '../transaction.json';
// import data from '../data.json';
// import friends from 'friends.json'


export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
     {/* <ProfileStats props={user}/> */}
      {/* <Statistics  />  */}
      <FriendList />
      {/* <TransactionHistory /> */}
    </div>
  );
};
