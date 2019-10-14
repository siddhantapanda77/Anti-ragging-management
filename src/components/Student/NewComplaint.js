import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

import {addComplaint} from '../../store/actions/complaintsActions'

class NewComplaint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        this.props.addComplaint(this.state);
        this.props.history.push('/complaints')
    }

    render() {
      if(!(this.props.auth.isAuthenticated)){
        return(<Redirect to='/'/>)
      }
        return (
        <div>
        <h2 className="center-align white-text">Complain Form</h2>
              <div>
                <div className="container white-text">
              
                    <form className="white-text" onSubmit={this.handleSubmit}>
                    <div className="input-field ">
                  <input 
                    id="title" 
                    name="title"
                    value={this.state.department} 
                    onChange={this.handleChange}
                    type="text" 
                    className="feedback-input white-text" />
                  <label className="white-text" htmlFor="name" className="black-text">Title</label>                  
                 </div>                        
                        <div className="row">
                          <div className="input-field ">
                          <i className="material-icons prefix">mode_edit</i>
                            <textarea 
                            id="description"
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                            className="white-text materialize-textarea validate[required,length[10,1000]] feedback-input" 
                            data-length="120"></textarea>
                            <label className="white-text" htmlFor="textarea2" className="black-text">Describe your complaint</label>
                          </div>
                        </div>
                  <div className="input-field center">               
                    <button  className="submit waves-effect waves-light btn center-align">
                      SUBMIT COMPLAIN
                      <i className="material-icons right">send</i>
                    </button>
                </div>
                      </form>
                  
                      </div>
                </div>
        </div>
    )
}
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    addComplaint: (com) => dispatch(addComplaint(com))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewComplaint);