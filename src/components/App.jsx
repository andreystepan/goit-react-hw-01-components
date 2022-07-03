
import { ProfileUser } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./Friends/FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './Friends/FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json'

export const App = () => {
  return (
    <div>
      <ProfileUser username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />      
      
      <Statistics 
         title="Upload stats"
          stats={data}
            />
      <div>
       <FriendList friends = {friends}/>
        </div>
        
      <div>
        <TransactionHistory transactions={transactions}/>
        </div>
    
    </div>

  );
};
