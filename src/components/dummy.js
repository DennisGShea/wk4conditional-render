
import React from 'react'
import User from './user'

class Dummy extends React.Component {
    constructor(props) {
    super(props)
    this.state =  { 
        isLoggedIn: false
    }
}
render() {
   if (!this.state.isLoggedIn) {
  return  (
    <>
        <h1>Hello guest!</h1>
        <button onClick={() => this.setState({ isLoggedIn: true  })} >
        Login</button>
    </>
  )}
  return (
        <>
          <h1>hello user </h1>
          <button
          onClick={() => this.setState({isLoggedIn: false})} >
          LOGOUT </button>
            <User
                age={28}
                isLoggedIn={this.state.isLoggedIn}
                name='Bobby'
            /> 
        </>
   )
  }
}
export default Dummy 