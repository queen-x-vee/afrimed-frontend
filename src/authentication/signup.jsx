import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
      <Link to='/doctor'>Doctor Dashboard</Link>
      <Link to='/patient'>Patient Dashboard</Link>
    </div>
  )
}

export default Signup