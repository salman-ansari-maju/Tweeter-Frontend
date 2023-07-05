import { useState, useEffect } from "react";
import { Users } from "./Components/users";
import { TUser, TPost } from "./types";
import "./styles.css";
import Post from "./Post";

function App() {
  const [users, setUsers] = useState<TUser[]>([
    {
      id: 1,
      name: "Salman",
      isFollow: false,
      isCurrentUser: true,
      Content: [{ id: 10, content: "content of Salman" }],
    },
    {
      id: 4,
      name: "John",
      isFollow: false,
      isCurrentUser: false,
      Content: [{ id: 11, content: "content of john" }],
    },
    {
      id: 2,
      name: "Jane",
      isFollow: false,
      isCurrentUser: false,
      Content: [{ id: 12, content: "content of Jane" }],
    },
    {
      id: 3,
      name: "Bob",
      isFollow: false,
      isCurrentUser: false,
      Content: [{ id: 13, content: "content of Bob" }],
    },
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPost({ ...posts, [e.target.name]: e.target.value });
    console.log(posts);
  };

  function handlePost() {
    const newPost = { ...posts, id: Date.now() };
    const ContentUpdater = users.map((user) => {
      user.isCurrentUser ? user.Content.push(newPost) : null;
      return user;
    });
    setUsers(ContentUpdater);
  }

  const funt = (val: TPost) => {
    // const updater = streak.map((e) => {
    //   if (e.id === val.id) streak.indexOf(e)
    //   return;
    //  });
    // const updater = streak.filter((s) => s.id !== val.id);
    // setStreak(updater);

    // const updatermy = users.map((user) => {
    //   user.isCurrentUser
    //     ? user.Content.filter((e) => {
    //         return e.id !== val.id;
    //       })
    //     : null;
    //   return user;
    // });

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
          {users.map((value) =>
            value.isCurrentUser || value.isFollow ? null : (
              <Users key={value.id} user={value} follow={follow} />
            )
          )}
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
            {users.map((e) =>
              e.isFollow || e.isCurrentUser ? (
                <Post post={e.Content} fun={funt} />
              ) : null
            )}
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
