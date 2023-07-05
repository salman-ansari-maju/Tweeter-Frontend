import { TUser } from "../types";

export const Users = ({ user, follow }: TUsers) => {
  // console.log("rerender users");
  return (
    <div className="users">
      <h3 style={{ cursor: "pointer" }}>{user.name}</h3>
      <button className="user-btn" onClick={() => follow(user)}>
        {user.isFollow ? "unFollow" : "Follow"}
      </button>
    </div>
  );
};

interface TUsers {
  user: TUser;
  follow: (user: TUser) => void;
}
