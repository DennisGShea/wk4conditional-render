import { Link } from 'react-router-dom'
import React from 'react'

class Dummy extends React.Component {
    constructor(props) {
    super(props)
    this.state =  { 
        isLoggedIn: false
    }
}

render() {
    const { isLoggedIn } = this.state
    return (
      <>
        <h1>Hello {(isLoggedIn) ? 'USER!!' : 'Guest'}</h1>
        <button
          onClick={() => this.setState({ isLoggedIn: !isLoggedIn })}>
          {(isLoggedIn) ? 'LOGOUT' : 'Sign In'}</button>
          <Link to="/Todd">Todd</Link>
          <Link to="/Becca">Becca</Link>
      
      </>
    )
  }




}
export default Dummy 