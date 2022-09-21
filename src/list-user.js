import React, { useEffect, useState } from "react";

function ListUser() {

  const [user, setUser] = useState([]);

  const getData = () => {
    fetch('https://62b4742fa36f3a973d3473d0.mockapi.io/api/users')
    .then((res) => res.json())
    .then((result) => {
      setUser(result)
    })
  }

  const onDelete = (id) => {
    console.log(id)
    fetch(`https://62b4742fa36f3a973d3473d0.mockapi.io/api/users/${id}`, {method: 'DELETE'})
    .then(
      getData
      )
  }

  useEffect(() => {
    getData()
  }, [user])
  
  return (
    <React.Fragment>
      <h2 className="txt-center heading-2">Users List</h2>
      <div className="card">
        
        <table className="tbl">
          <thead>
            <tr>
              <td>Created Date</td>
              <td>Avatar</td>
              <td>Full Name</td>
              <td>Email</td>
              <td>Password</td>
              <td>User Role</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {user.map((user) => (
              <tr key={user.id}>
              <td>{user.createdAt}</td>
              <td><img className="tbl-avtr" src={user.avatar} alt={''} /></td>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>{user.userRole}</td>
              <td>
                <a href={`http://localhost:3000/edit-user/${user.id}`} className="link">Edit</a>
                {/* <a href={`http://localhost:3000/delete-user/${user.id}`} className="link">Delete</a> */}
                <button className="link" onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
            ))}
          </tbody>
        </table>

      </div>
    </React.Fragment>
  );
}

export default ListUser;