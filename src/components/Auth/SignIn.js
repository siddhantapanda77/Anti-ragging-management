import React, { Component} from 'react'
import {login} from '../../store/actions/authActions'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


class SignIn extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);

  }
  handleChange =(e)=>{
      this.setState({[e.target.id]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state)   
  }

    render() {
      if((this.props.auth.isAuthenticated))
    {
      if(this.props.auth.user.email_vrfy !== 1)
      
        return(<p>Email not verified</p>)
      else
      {{if(this.props.auth.user.designation === 'student')
          return(<Redirect to='/complaints' />)
      else
      return(<Redirect to='/allComplaints' />)
    }
  }
} 
       
    return ( 
            <div  style={{width: 'fit-content',margin: "10% auto"}}>
            <div className="card blue-grey lighten-5" >
              <div className="card-content blue-grey lighten-5">
                <div className="card-title">Sign In</div>
            <form className=" blue-grey lighten-5 black-text" onSubmit={this.handleSubmit}>
              <div className="input-field">
                <label className="black-text" htmlFor="email">Email</label>
                <input className="black-text" type="email" id='email' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label  className="black-text" htmlFor="password">Password</label>
                <input type="password" id='password' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <button className="btn indigo darken-3 lighten-1 z-depth-0">Login</button>
                {/* <div className="center red-text">
                  { authError ? <p>{authError}</p> : null }
                </div> */}
              </div>
            </form>
            </div>
            </div>
          </div>
        );
    }
}

const mapStatetoProps = (state) => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      login: (d) => dispatch(login(d))
    }
}


export default connect(mapStatetoProps, mapDispatchToProps)(SignIn)
