import React, {Component} from 'react'
import {connect} from 'react-redux'

import {signup} from '../../store/actions/authActions'


class SignUp extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      designation:'student'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signup(this.state)
  }

    render() {
        return (            
            <div style={{width: '30%',margin: "10% auto"}}>
              <div className="card blue lighten-2" >
              <div className="card-content ">
            <form className="black-text blue lighten-2" onSubmit={this.handleSubmit}>
              <h5 className="grey-text text-darken-3">Sign Up</h5>
              <div className="input-field blue lighten-2">
                <label className="black-text" htmlFor="email">Email</label>
                <input type="email" id='email' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label className="black-text" htmlFor="password">Password</label>
                <input type="password" id='password' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn indigo darken-3 lighten-1 z-depth-0">Sign Up</button>
                {/* <div className="center red-text">
                  { authError ? <p>{authError}</p> : null }
                </div> */}
              </div>
              <p>Sign Up as <a className="green-text" href="/signup-admin">admin or volunteer</a> instead.</p>
            </form>
            </div>
            </div>
          </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (data) => dispatch(signup(data))
  }
}

export default connect(null, mapDispatchToProps)(SignUp);