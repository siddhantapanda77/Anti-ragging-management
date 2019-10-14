import React, { Component } from 'react'
import { Link,Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import moment from 'moment'
import {Preloader} from 'react-materialize'

import {getComplaint} from '../../store/actions/complaintsActions'
import {getSingleStudent} from '../../store/actions/VorSActions';


class ComplaintsList extends Component {
 constructor(props) {
   super(props);
   console.log("constructor")
   this.props.getComplaint();
   this.props.getSingleStudent();
 }
  render(){
    if(!(this.props.auth.isAuthenticated)){
      
      return(<Redirect to='/'/>)
    }

    const { complaints } = this.props.complaints;
    console.log('in complaints list')
    console.log(Array.isArray(complaints));
    var comList; 
    if(Array.isArray(complaints))
    {
      console.log(complaints.length);
      comList = complaints.length ? (
      complaints.map(complaint => {
        const { complain } = complaint;
        return (
          <div className=" card" key={complain.timestamp}>
            <div className="card-content">
              <Link to={'/complaints/' + complaint.id}>
                <span className="card-title blue-text">{complain.title}</span>
              </Link>
              <p >{complain.description}</p>
              <p className="left indigo-text">DATE : {moment.utc(complain.timestamp).format("MMMM Do YYYY, h:mm:ss a")}</p>
              <p className={'right '+((complain.status==='pending') ? "red-text":"green-text")}>STATUS : {complain.status}</p>

            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No complaints to show</div>
    );}
    else{
      return(<div style={{marginTop: '10%'}}><Preloader flashing /></div>)
      
    }


    return (
      <div>
        <div className="container home">
          <h4 className="center">Your complaints</h4>
          {comList}
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    complaints: state.complaintsList,
    auth: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleStudent : () => dispatch(getSingleStudent()),
    getComplaint: () => dispatch(getComplaint())
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(ComplaintsList)