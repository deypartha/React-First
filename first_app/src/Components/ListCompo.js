import React from 'react'

function ListCompo() {
    let student = [
        {id: 101, name: "Ram"},
        {id: 102, name: "Raj"},
        {id: 103, name: "Ajay"},
        {id: 104, name: "Vijay"},
        {id: 104, name: "Vijay"},
      ];
  return (
    <div>
      <ul>
        {
            student.map(student=>{
            return <li key = {student.id}>{student.name}</li>
            })
        }
      </ul>
    </div>
  )
}

export default ListCompo
