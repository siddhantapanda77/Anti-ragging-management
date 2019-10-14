import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'

import {logout} from '../../store/actions/authActions' 

class SignedInLinks extends Component {


    handleClick=()=>{
        this.props.logout();
    }

    render(){
        var links;
        if(this.props.auth.user.designation === 'admin')
         {
            links = <ul>
                        <li><NavLink to='/allComplaints'>Complaints</NavLink></li>
                        <li><NavLink to='/addVolunteer'>Add Volunteer or students</NavLink></li>
                        <li><NavLink to='/allUsers'>All users</NavLink></li>
                        <li><NavLink to='/allAdmin'>All admins</NavLink></li>
                        <li><NavLink to='/allVolunteers'>All volunteers</NavLink></li>
                        <li><NavLink to='/' onClick={this.handleClick}>Log out</NavLink></li>
                        <li><NavLink to='/profile'>Profile</NavLink></li>
                    </ul>
         }
         else if(this.props.auth.user.designation === 'volunteer')
         {
            links = <ul>
                        <li><NavLink to='/allComplaints'>Complaints</NavLink></li>                        <li><NavLink to='/allUsers'>All users</NavLink></li>
                        <li><NavLink to='/allVolunteers'>All volunteers</NavLink></li>
                        <li><NavLink to='/' onClick={this.handleClick}>Log out</NavLink></li>
                        <li><NavLink to='/profile'>Profile</NavLink></li>
                    </ul>
         }
         else{
            links = <ul id="nav-mobile" className="right">
            <li><NavLink to='/complaints'>Complaints</NavLink></li>
            <li><NavLink to='/profile'>Profile</NavLink></li>
            <li><NavLink to='/addComplaints'>Add Complaint</NavLink></li>
            <li><NavLink to='/' onClick={this.handleClick}>Log out</NavLink></li>
        </ul>
         }
        return(
            <div>
            {links}
            </div>   
    )}
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('logout')
    return {
        logout: () => dispatch(logout())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);