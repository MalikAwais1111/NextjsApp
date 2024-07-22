import React from 'react'
import Loginpage from './@login/page'

const ComplexDashboard = ({
    children,
    notifications,
    useranalytics,
    renewmatrix,
    login,
}:{
    children: React.ReactNode
    useranalytics: React.ReactNode
    renewmatrix: React.ReactNode
    notifications: React.ReactNode
    login: React.ReactNode
}) => {
  const islogedin = false
  return islogedin ? (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="mb-4">
        {children}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          {useranalytics}
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          {renewmatrix}
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        {notifications}
      </div>
    </div>
  ) : (
    <div className="bg-white p-10 rounded-lg shadow-md text-red-700">
    {login}
  </div>
  )
}

export default ComplexDashboard
