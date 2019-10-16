import React, {Component} from 'react';

import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {updateDetails} from '../../store/actions/VorSActions';
import { Preloader,Modal,TextInput } from 'react-materialize';



class StudentDetails extends Component{
    constructor(props){
        super(props);
        const {student} = this.props.student;
        if(Array.isArray(student)){
            this.state = {
            
                name: student[0].name,
                profile_pic: student[0].profile_pic,
                gender: student[0].gender,
                phone: student[0].phone,
                branch: student[0].branch,
                semester: student[0].semester,
                degree: student[0].degree
              
        }
    }
        else{
            this.state = {
            
                name: "",
                profile_pic: "",
                gender: "",
                phone: 9999999999,
                branch: "",
                semester: 9,
                degree: ""
              
        }
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.updateDetails(this.state)
    }
    render(){
        if(!(this.props.auth.isAuthenticated)){
            return(<Redirect to='/'/>)
          }
          if (this.state.name === "") {
            // Simulate a JS error
            throw new Error('I crashed!');
          }
        console.log(this.props.student.student)
        const {student} = this.props.student;
        console.log(student )
        if(Array.isArray(student))
        {return(
            <div className='container row' style={{marginTop: '2%'}}>
                <img className='col s12 m6 l6'src={student[0].profile_pic} style={{borderRadius: '7%',  
                                                          width: '44%',
                                                          marginTop: '4%'}}/>
                
                <div className='container col s12 m6 l6'>
                <h3 className='center'>
                    {student[0].name}
                </h3>
                {((this.props.auth.user.designation === 'admin')||(this.props.auth.user.designation === 'volunteer'))?null:
                (<div><p>Degree: {student[0].degree}</p>
                <p>Branch: {student[0].branch}</p></div>)}
                <p>ID: {student[0].clg_id}</p>
                <p>Semester: {student[0].semester}</p>
                <p>Email: {student[0].email}</p>
                <p>Phone: {student[0].phone}</p>
                <Modal header="Edit details"  trigger={<button className="btn" >
                    Update profile
                    <i class="material-icons right">edit</i></button>
          }>
              <div>
              <form className="container" onSubmit={this.handleSubmit}>
              <TextInput label="name" id="name" value={this.state.name} onChange={this.handleChange}/>
              <TextInput label="profile_pic" id="profile_pic" value={this.state.profile_pic} onChange={this.handleChange}/>
              <TextInput label="gender" id="gender" value={this.state.gender} onChange={this.handleChange}/>
              <TextInput label="phone" id="phone" value={this.state.phone} onChange={this.handleChange}/>
              <TextInput label="semester" id="semester" value={this.state.semester} onChange={this.handleChange}/>
              <TextInput label="degree" id="degree" value={this.state.degree} onChange={this.handleChange}/>    
              <div className="input-field center">
                <button className="waves-effect waves-light btn-small indigo darken-3 z-depth-0">SUBMIT</button>
                {/* <div className="center red-text">
                  { authError ? <p>{authError}</p> : null }
                </div> */}
              </div>          
            </form>
              </div>
              </Modal>
                
            </div>
            </div>
        )}
        else{
            return(<div style={{marginTop: '10%'}}><Preloader flashing /></div>)
        }
    }
}

const mapStateToProps = (state) => {
    return {
        student: state.student,
        auth: state.auth
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDetails: (data) => dispatch(updateDetails(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(StudentDetails);
