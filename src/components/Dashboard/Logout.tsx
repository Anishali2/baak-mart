import Link from 'next/link'
import React from 'react'

const Logout = () => {
  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Logout</h2>
        <p className="mb-4">
          Are you sure you want to logout your account? This action cannot be
          undone.
        </p>
        <Link href={'/seller/login'}>
          <button className="bg-primary text-white py-2 px-4 rounded-lg">
            Logout
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Logout
