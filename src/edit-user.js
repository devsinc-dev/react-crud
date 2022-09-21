import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditUser() {

  const params = useParams()
  const userId = params.id

  const navigate = useNavigate();

  const [fullName, setFullname] = useState();
  const [profileUrl, setProfileUrl] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userRole, setUserrole] = useState();

  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`https://62b4742fa36f3a973d3473d0.mockapi.io/api/users/${userId}`)
    .then((res) => res.json())
    .then((result) => {
      setUser(result)
      console.log(result)
    })
  }, [userId])

  const SubmitHandler = () => {
    fetch(`https://62b4742fa36f3a973d3473d0.mockapi.io/api/users/${userId}`, {
      method: 'PUT',
      body: JSON.stringify({
        fullName: fullName,
        avatar: profileUrl,
        email: email,
        password: password,
        userRole: userRole
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then(
        // (json) => console.log(json)
        navigate('/user-list')
      );
  }

  return (
    <React.Fragment>

      <h2 className="txt-center heading-2">Edit User</h2>
      <div className="card">
        
        <div className="field-block">
          <label>Full Name</label>
          <input type={'text'}
            defaultValue={user.fullName}
            onChange={e => setFullname(e.target.value)}
          />
        </div>

        <div className="field-block">
          <label>Enter Profile Picture URL</label>
          <input type={'text'}
            defaultValue={user.avatar}
            onChange={e => setProfileUrl(e.target.value)}
          />
        </div>

        <div className="field-block">
          <label>Email</label>
          <input type={'email'}
            defaultValue={user.email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="field-block">
          <label>Password</label>
          <input type={'password'}
            defaultValue={user.password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div className="field-block">
          <label>User Role</label>
          <input type={'text'}
          defaultValue={user.userRole}
            onChange={e => setUserrole(e.target.value)}
          />
        </div>

        <div className="field-block">
          <button onClick={SubmitHandler}>Edit User</button>
        </div>

      </div>
    </React.Fragment>
  );
}

export default EditUser;