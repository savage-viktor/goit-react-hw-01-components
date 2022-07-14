import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics"
import user from "../user"
import data from "../data"

// const user = JSON.parse(user)

// console.log(data)


export const App = () => {
  return (<div>
    <Profile
      name={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />

    <Statistics
      title="Upload stats"
      stats={data}
    />

  </div>


  );
};
