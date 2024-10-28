import { useState } from "react";

export default function UsernameForm() {
  const [username, setUsername] = useState("");
  return (
    <div>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(evt) => setUsername(evt.target.value)}
        id="username"
      />
      <button>Submit</button>
    </div>
  );
}
