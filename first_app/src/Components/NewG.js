import React from 'react'

function NewG() {
    let users = [
        {name: "Ram", email: "ram@gmail.com", mobile: 1245678},
        {name: "Ramen", email: "ramen@gmail.com", mobile: 12875678},
        {name: "Radha", email: "radha@gmail.com", mobile: 7545678},
        {name: "Ajay", email: "ajay@gmail.com", mobile: 1245678},
        {name: "Vijay", email: "vijay@gmail.com", mobile: 1245678},
    ];
    
  return (
    <div>
        {users.map(users=><p>{users.name}  {users.email}  {users.mobile}</p>)}
        <button>Show Me</button>
      <p></p>
    </div>
  )
}

export default NewG

