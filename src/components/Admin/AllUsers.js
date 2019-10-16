import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {getAllStudents} from '../../store/actions/VorSActions'
import { Preloader,Modal } from 'react-materialize';


class AllUsers extends Component {
    componentDidMount(){
        this.props.getAllStudents();   
        
    }
    render(){
        if(!(this.props.auth.isAuthenticated)){
        return(<Redirect to='/'/>)
      }
        const { users } = this.props.userList
        if(Array.isArray(users))
        {console.log(users)
        return(
            <div className= "row">
                
                {
                  
                    users.map(user => <div className="container col s2  m3 l4" key={user.clg_id} >
                      <div className= "card">
                      <div className="card-content">
                      <img src={user.profile_pic} alt="volunteer name" style={{borderRadius: '68%',  
                                                          width: '37%', 
                                                          border: '2px solid blue'}}/>
                      <ul>
                        <li>{user.name}</li>
                        <li>{user.email}</li>
                        <div className="card-action ">
                        </div>
                      </ul>
                      </div>
                      <Modal header="Student details"  trigger={<button className="btn" style={{marginTop: '-24%'}}>View profile</button>
          }>
              <div>
              <div className='post' style={{marginTop: '2%'}}>
                <img src={user.profile_pic} alt="user.name" style={{borderRadius: '68%',  
                                                          width: '28%', 
                                                          border: '2px solid blue'}}/>
                
                <h4 className='right'>
                    Name:{user.name}
                </h4>
                <p>Degree: {user.degree}</p>
                <p>Branch: {user.branch}</p>
                <p>ID: {user.clg_id}</p>
                <p>Semester: {user.semester}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                </div>
              </div>
              </Modal>
                      </div>
                    </div>)

                }
              
            </div>
          )}
          else{
              return(<div style={{marginTop: '10%'}}><Preloader flashing /></div>)
          }
    }

}

const mapStateToProps = (state) => {
    return {
        userList: state.users,
        auth: state.auth
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllStudents : () => dispatch(getAllStudents())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
