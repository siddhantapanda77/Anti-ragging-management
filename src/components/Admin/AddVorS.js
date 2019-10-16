import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

import {signup} from '../../store/actions/authActions'

class AddVorS extends Component{
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      designation: 'volunteer'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e) => {    
    this.setState({[e.target.id]: e.target.value})
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.signup(this.state)
  }
  handleOptionChange = changeEvent => {
    this.setState({
      designation: changeEvent.target.value
    });
  };

    render() {
      if(!(this.props.auth.isAuthenticated)){
        return(<Redirect to='/'/>)
      }
        return (            
          <div  style={{width: 'fit-content',margin: "8% auto"}}>
          <div className="card indigo lighten-4" >
          <div className="card-content">
            <form className="black-text" onSubmit={this.handleSubmit}>
              <h5 className="black-text text-darken-3">Add Volunteer or Student</h5>
              <div className="input-field">
                <label className="black-text" htmlFor="email">College Email</label>
                <input className="black-text" type="text" id='email' className="validate" required pattern="[a-z][0-9][0-9][0-9][0-9][0-9][0-9]@iiit-bh.ac.in" onChange={this.handleChange} />
                <span className="helper-text" data-error="Please enter college email id" data-success="Right">Enter college email ID</span>              </div>
              <div className="input-field">
                <label className="black-text" htmlFor="password">Password</label>
                <input  className="black-text" type="password" id='password' onChange={this.handleChange} />
              </div>
              <p>
                <label>
                  <input 
                    type="radio"
                    name="designation"
                    value="volunteer"
                    checked={this.state.designation === "volunteer"}
                    className="form-check-input"
                    onChange={this.handleOptionChange} />
                  <span className="black-text">Volunteer</span>
                </label>
              </p>
              <p>
                <label>
                  <input 
                    type="radio"
                    name="designation"
                    value="admin"
                    checked={this.state.designation === "admin"}
                    className="form-check-input"
                    onChange={this.handleOptionChange} />
                  <span className="black-text">Admin</span>
                </label>
              </p>
              <div className="input-field">
                <button className="btn indigo darken-3 lighten-1 z-depth-0">ADD</button>
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


const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (data) => dispatch(signup(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddVorS);
