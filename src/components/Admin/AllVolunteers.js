import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {getAllVolunteers, removeVolunteer} from '../../store/actions/VorSActions'
import {Preloader,Modal, Button} from 'react-materialize'

class AllVolunteers extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }
    }
    componentDidMount(){
        this.props.getAllVolunteers();   
        
    }
    handleModal= () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }
    render(){
        if(!(this.props.auth.isAuthenticated)){
            return(<Redirect to='/'/>)
          }

        const { volunteers } = this.props.volunteerList
        if(Array.isArray(volunteers))
        {console.log(volunteers)
        return(
            <div className= "row">
                
                {
                  
                    volunteers.map(volunteer => <div className="container col s12  m3 l4" key={volunteer.clg_id} >
                      <div className= "card">
                      <div className="card-content">
                      <img src={volunteer.profile_pic} style={{borderRadius: '68%',  
                                                          width: '37%', 
                                                          border: '2px solid blue'}}/>
                      <ul>
                        <li>{volunteer.name}</li>
                        <li>{volunteer.email}</li>
                        <div className="card-action ">
                        </div>
                      </ul>
                      </div>
                      <Modal header="Details"  trigger={<button className="btn" style={{marginTop: '-24%'}}>View profile</button>
          }>
              <div>
              <div className='post' style={{marginTop: '2%'}}>
                <img src={volunteer.profile_pic} alt="volunteer name" style={{borderRadius: '68%',  
                                                          width: '28%', 
                                                          border: '2px solid blue'}}/>
                
                <h5>
                    Name:{volunteer.name}
                </h5>
                
                <p>ID: {volunteer.clg_id}</p>
                <p>Email: {volunteer.email}</p>
                <p>Phone: {volunteer.phone}</p>
                {((this.props.auth.user.designation === 'admin')?<button className="btn blue" onClick={this.handleModal}>
                  Remove</button>:null)}
                
                  <Modal className="red-text" open={this.state.showModal} header="Warning!!!!" actions={<Button waves="green" modal="confirm" flat></Button>}>
                  <p className="red-text text-darken-2">Are you sure you want to remove {volunteer.name}?</p>
                  <div className="row">
                      <button className="btn red" onClick={()=>this.props.removeVolunteer(volunteer.id)}>Yes</button>
                      <button className="btn green" onClick={this.handleModal} style={{marginLeft: '4px'}}>N0</button>
                  </div>
                  </Modal>
                  
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
        volunteerList: state.volunteers,
        auth: state.auth
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllVolunteers : () => dispatch(getAllVolunteers()),
        removeVolunteer : (id) => dispatch(removeVolunteer(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllVolunteers);
