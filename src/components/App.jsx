import { FriendList } from "./FriendList/FriendList";
// import { ProfileStats } from "./ProfileStats/ProfileStats";
// import { Statistics } from "./Statistics/Statistics";
// import friends from '../friends.json';
// import user from '../user.json';
// import data from '../data.json';
// import friends from 'friends.json'


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     {/* <ProfileStats props={user}/> */}
      {/* <Statistics  />  */}
      <FriendList />
    </div>
  );
};
