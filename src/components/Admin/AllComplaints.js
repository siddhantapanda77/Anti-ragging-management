import React,{Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment'
import {Preloader, Modal} from 'react-materialize'

import {getAllComplaints, resolveComplaints} from '../../store/actions/complaintsActions'
import {getSingleStudent} from '../../store/actions/VorSActions';



class AllComplaints extends Component{
  constructor(props){
    super(props)
    this.props.getAllComplaints();
    this.props.getSingleStudent();
  }
    render(){
      if(!(this.props.auth.isAuthenticated)){
        return(<Redirect to='/'/>)
      }

        const { complaints } = this.props.complaints;
        console.log('in complaints list')
        console.log(this.props.complaints)
        console.log(Array.isArray(complaints));
        var comList; 
        if(Array.isArray(complaints))
        {
          console.log("this.props.complaints")
          console.log(complaints);
          comList = complaints.length ? (
          complaints.map(complaint => {
            const { complain } = complaint;
            const { victim } = complaint;
            // console.log(complain)
            // console.log( victim);
            return (
              <div key={complain.comp_id}>
              <div className=" card indigo lighten-4" >
                  <div className="card-content">
                  {((complain.status==='pending')?<button className="right btn red" onClick={()=>this.props.resolveComplaints(complain.comp_id)}>
                  Resolve</button>:null)}
                      <h3 className="card-title blue-text">{complain.title}</h3>
                    {/* <Link to={'/complaints/' + post.id}>{((post.status==='Unsolved')?<button className="left btn blue" onClick={this.handleClick}> */}
                            {/* Resolve complaint */}
                    {/* </button>:null)}</Link> */}
                    <p className="truncate">{complain.description}</p>
                    <h5 >Submitted by: {victim.name}(ID: {victim.clg_id})</h5>
                    <p className="indigo-text" >DATE : {moment.utc(complain.timestamp).format("MMMM Do YYYY, h:mm:ss a")}</p>
                    <p className={'right '+((complain.status==='pending') ? "red-text":"green-text")}>STATUS : {complain.status}</p>
                    <div style={{marginBottom:"5%"}}></div>
                    <div>
              <Modal header="Details" key={complain.comp_id} trigger={<button className="left btn blue" style={{marginTop:"-5%"}}>
                Details
              </button>          
          }>
              <div>
              <div className='post' style={{marginTop: '2%'}}>
                <img src={victim.profile_pic} alt="victim.name" style={{borderRadius: '68%',  
                                                          width: '28%', 
                                                          border: '2px solid lightpink'}}/>
                
                <h4 className='right'>
                    Name:{victim.name}
                </h4>
                <p> Complaint: {complain.description}</p>
                <p>Degree: {victim.degree}</p>
                <p>Branch: {victim.branch}</p>
                <p>ID: {victim.clg_id}</p>
                <p>Semester: {victim.semester}</p>
                <p>Email: {victim.email}</p>
                <p>Phone: {victim.phone}</p>
                </div>
              </div>
              </Modal>
              </div>
                  </div>
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
              <h4 className="center">Complaints</h4>
              {comList}
            </div>
          </div>
        )
      
    }
}

const mapStateToProps = (state) => {
    return {
      auth: state.auth,
      complaints: state.complaintsList      
    }
  }
  
const mapDispatchToProps = (dispatch) => {
  return{
    getAllComplaints: () => dispatch(getAllComplaints()),
    getSingleStudent : () => dispatch(getSingleStudent()),
    resolveComplaints: (id) => dispatch(resolveComplaints(id))
  }
}

  

export default connect(mapStateToProps, mapDispatchToProps)(AllComplaints)