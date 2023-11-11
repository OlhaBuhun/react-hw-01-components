import { Profile } from "./Profile/Profile";
import { Stats } from "./ProfileStats/ProfileStats";

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
      {/* React homework template */}
      <Profile />
      {/* <Stats /> */}
    </div>
  );
};
