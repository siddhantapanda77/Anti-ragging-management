import React,{ Component } from 'react'
import {connect} from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'



class NavBar extends Component {
    render(){
     const links = (this.props.auth.isAuthenticated)?<li><SignedInLinks/></li>:<li><SignedOutLinks/></li> 
      return(
        <div>  
            <nav className="indigo">
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo">ATMS</a>
                <ul className="right hide-on-med-and-down">
                  {links}
                </ul>
              </div>
            </nav> 
         </div>
  
                 

    );
}
}
const mapStateToProps = (state) => {
  return{
      
      auth: state.auth
  }
}

export default connect(mapStateToProps)(NavBar);






