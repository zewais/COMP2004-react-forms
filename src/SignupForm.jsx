import { useState } from "react";

//Adding more fields requires more states and more handler functions which is unattainable
//better to use an object

export default function SignupForm() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  return (
    <div>
      <label htmlFor="firstname">Firstname</label>
      <input
        type="text"
        placeholder="firstname"
        value={firstname}
        onChange={(evt) => setFirstname(evt.target.value)}
        id="firstname"
      />
      <label htmlFor="lastname">lastname</label>
      <input
        type="text"
        placeholder="lastname"
        value={lastname}
        onChange={(evt) => setLastname(evt.target.value)}
        id="lastname"
      />
      <button>Submit</button>
    </div>
  );
}
