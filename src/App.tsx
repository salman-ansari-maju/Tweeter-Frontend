import { useState, useEffect } from "react";
import { Users } from "./Components/users";
import { TUser } from "./types";
import "./styles.css";
import Post from "./Post";

type TPost = {
  id: number;
  content: string;
};

function App() {
  const [users, setUsers] = useState<TUser[]>([
    { id: 1, name: "John", isFollow: false },
    { id: 2, name: "Jane", isFollow: false },
    { id: 3, name: "Bob", isFollow: false },
  ]);
  const [streak, setStreak] = useState<TPost[]>([]);

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
  // let pId: number = 10;
  function handlePost() {
    const newPost = { ...posts, id: Date.now() };
    // posts.id = Date.now;
    setStreak([...streak, newPost]);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...posts, [e.target.name]: e.target.value });
    console.log(posts);
  };
  const funt = (val: TPost) => {
    // const updater = streak.map((e) => {
    //   if (e.id === val.id) streak.indexOf(e)
    //   return;
    // });
    const updater = streak.filter((s) => s.id !== val.id);
    setStreak(updater);
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div
          style={{
            minHeight: "100vh",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            width: "150px",
            backgroundColor: "lavender",
            borderRadius: "10px",
            position: "sticky",
            top: 0,
          }}
        >
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Friends suggestion
          </h2>
          {users.map((value) => (
            <Users key={value.id} user={value} follow={follow} />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            height: "auto%",
            width: "400px",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <h1>Posts</h1>
          <div style={{ display: "flex" }}>
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
            {streak.map((value) => (
              <Post post={value} fun={funt} />
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            height: "auto",
            width: "300px",
            backgroundColor: "lightpink",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <h2>Following</h2>
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

export default App;
