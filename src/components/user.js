import React from 'react'
import {Link} from 'react-router-dom'

function User(props) {
  const {isLoggedIn, name, age} = props
  console.log(isLoggedIn)
  if (!isLoggedIn) {
    return null
  }
  return (
      <>
    <p>Hello{name}.{age} Blah blah blah. You are amazing. Thank for being you.</p>
    <Link to="/">Home</Link>  </>)
    
}
export default User