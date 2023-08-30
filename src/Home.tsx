import { useState, useEffect } from "react";
import { Users } from "./Components/users";
import { TUser, TPost } from "./types";
import "./styles.css";
import Post from "./Components/Post";
import { UsersData } from "./data/user's data";

function Home() {
  const [users, setUsers] = useState<TUser[]>(UsersData);

  const [posts, setPost] = useState<TPost>({ id: 1, content: "" });

  function follow(value: TUser) {
    const UpdateUsers = users.map((user) => {
      if (user.id === value.id) {
        user.isFollow = !user.isFollow;
      }
      return user;
    });

    setUsers(UpdateUsers);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...posts, [e.target.name]: e.target.value });
    console.log(posts);
  };

  function handlePost() {
    if (posts.content != "") {
      const newPost = { ...posts, id: Date.now() };
      const ContentUpdater = users.map((user) => {
        user.isCurrentUser ? user.Content.push(newPost) : null;
        return user;
      });
      setUsers(ContentUpdater);
    }
  }

  const funt = (val: TPost) => {
    const updater = users.map((user) => {
      return user.isCurrentUser
        ? {
            ...user,
            Content: user.Content.filter((post) => post.id !== val.id),
          }
        : user;
    });

    setUsers(updater);
  };
  const logout = () => {
    localStorage.clear();
    location.reload();
  };

  return (
    <>
      <div
        style={{
          height: "50px",
          // backgroundColor: "#eee",
          boxShadow: " -1px 0 9px 0 rgba(0, 0, 0, .1)",
          display: "flex",
          justifyContent: "end",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <div
          style={{
            margin: 20,
            backgroundColor: "beige",
            height: 40,
            width: 80,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          onClick={() => {
            logout();
          }}
        >
          logout
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="suggestion">
          <h2 className="heading">Friends suggestion</h2>
          {users.map((value) =>
            value.isCurrentUser || value.isFollow ? null : (
              <Users key={value.id} user={value} follow={follow} />
            )
          )}
        </div>
        <div className="time-line">
          <h1 className="heading">Time Line</h1>
          <div className="heading">
            <input
              type="string"
              name="content"
              placeholder="Do the Post..."
              value={posts?.content}
              onChange={handleChange}
            />
            <button onClick={handlePost}>Post</button>
          </div>
          <div>
            {users.map((e) =>
              e.isFollow || e.isCurrentUser ? (
                <Post post={e.Content} fun={funt} />
              ) : null
            )}
          </div>
        </div>
        <div className="following">
          <h2 className="heading">Following</h2>
          {users.map((value) =>
            value.isFollow ? (
              <Users key={value.id} user={value} follow={follow} />
            ) : null
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
