import { useState } from "react";

export default function BetterSignupForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  });

  function handleFormChange(evt) {
    const fieldName = evt.target.name;
    const fieldValue = evt.target.value;
    //this is one way to handle the data in the state object or...
    //     setFormData((prevData) => {
    //       prevData[fieldName] = fieldValue;
    //       return { ...prevData };
    //     });
    //     console.log(evt.target.name);
    //   }

    //using the spread operater first then compute the name variable into a object key
    setFormData((prevData) => {
      return { ...prevData, [fieldName]: fieldValue };
    });
    console.log(evt.target.name);
  }

  return (
    <div>
      <label htmlFor="firstname">First Name</label>
      <input
        type="text"
        placeholder="firstname"
        name="firstname"
        value={formData.firstname}
        onChange={handleFormChange}
        id="firstname"
      />
      <br />
      <label htmlFor="lastname">Last Name</label>
      <input
        type="text"
        placeholder="lastname"
        name="lastname"
        value={formData.lastname}
        onChange={handleFormChange}
        id="lastname"
      />
      <br />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleFormChange}
        id="password"
      />
      <br />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="email"
        name="email"
        value={formData.email}
        onChange={handleFormChange}
        id="email"
      />
      <br />
      <button onClick={() => console.log(formData)}>Submit</button>
    </div>
  );
}
