import React from 'react'

interface users{
  id: number
  name: string
  email: string
}

const Users = async () => {

  const res=await fetch('https://jsonplaceholder.typicode.com/users')
  const users: users[] = await res.json()

  return (
    <>
    <table className='table table-bordered'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td></tr>)}
      </tbody>
    </table>
    </>
  )
}

export default Users