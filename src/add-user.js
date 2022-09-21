import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddUser() {
  
  const navigate = useNavigate();

  const [fullName, setFullname] = useState();
  const [profileUrl, setProfileUrl] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState();

  const SubmitHandler = () => {
    fetch(`https://62b4742fa36f3a973d3473d0.mockapi.io/api/users`, {
      method: 'POST',
      body: JSON.stringify({
        fullName: fullName,
        avatar: profileUrl,
        email: email,
        password: password,
        userRole: role
      }),
      headers: {
        'Content-type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(
        (json) => console.log(json)
      );
      navigate('/user-list')
  }

  return (
    <React.Fragment>

      <h2 className="txt-center heading-2">Add User</h2>
      <div className="card">
        
        <div className="field-block">
          <label>Full Name</label>
          <input type={'text'}
            onChange={e => setFullname(e.target.value)}
          />
        </div>

        <div className="field-block">
          <label>Enter Profile Picture URL</label>
          <input type={'text'}
            onChange={e => setProfileUrl(e.target.value)}
          />
        </div>

        <div className="field-block">
          <label>Email</label>
          <input type={'email'}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="field-block">
          <label>Password</label>
          <input type={'password'}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="field-block">
          <label>User Role</label>
          <input type={'text'}
            onChange={e => setRole(e.target.value)}
          />
        </div>

        <div className="field-block">
          <button onClick={SubmitHandler}>Add User</button>
        </div>

      </div>
    </React.Fragment>
  );
}

export default AddUser;