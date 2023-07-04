import { TUser } from "../types";

export const Users = ({ user, follow }: TUsers) => {
  // console.log("rerender users");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "5px",
        alignItems: "center",
        backgroundColor: "lightblue",
        margin: "0px 10px 10px 10px",
        padding: "0px 10px 0px 10px",
        borderRadius: "20px",
      }}
    >
      <h3 style={{ cursor: "pointer" }}>{user.name}</h3>
      <button
        style={{
          cursor: "pointer",
          height: "50%",
          borderRadius: "10px",
        }}
        onClick={() => follow(user)}
      >
        {user.isFollow ? "unFollow" : "Follow"}
      </button>
    </div>
  );
};

interface TUsers {
  user: TUser;
  follow: (user: TUser) => void;
}
