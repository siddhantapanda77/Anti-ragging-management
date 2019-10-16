import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import {getAllAdmins} from '../../store/actions/VorSActions'
import { Preloader,Modal } from 'react-materialize';


class AllAdmins extends Component {
    componentDidMount(){
        this.props.getAllAdmins();   
        
    }
    render(){
        if(!(this.props.auth.isAuthenticated)){
            return(<Redirect to='/'/>)
          }
        const { admins } = this.props.adminList
        if(Array.isArray(admins))
        {console.log(admins)
        return(
            <div className= "row">
                
                {
                  
                    admins.map(admin => <div className="container col s12  m3 l4" key={admin.clg_id} >
                      <div className= "card">
                      <div className="card-content">
                      <img src={admin.profile_pic} alt="volunteer name" style={{borderRadius: '68%',  
                                                          width: '37%', 
                                                          border: '2px solid blue'}}/>
                      <ul>
                        <li>{admin.name}</li>
                        <li>{admin.email}</li>
                        <div className="card-action ">
                        </div>
                      </ul>
                      </div>
                      <Modal header="Student details"  trigger={<button className="btn" style={{marginTop: '-24%'}}>View profile</button>
          }>
              <div>
              <div className='post' style={{marginTop: '2%'}}>
                <img src={admin.profile_pic} alt="admin.name" style={{borderRadius: '68%',  
                                                          width: '28%', 
                                                          border: '2px solid blue'}}/>
                
                <h4>
                    Name:{admin.name}
                </h4>
                
                <p>ID: {admin.clg_id}</p>
                
                <p>Email: {admin.email}</p>
                <p>Phone: {admin.phone}</p>
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
        adminList: state.admins,
        auth: state.auth
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllAdmins : () => dispatch(getAllAdmins())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllAdmins);
