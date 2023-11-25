// import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";


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
      <Profile />
      <Statistics  /> 
      {/* <FriendList /> */}
      <TransactionHistory />
    </div>
  );
};
