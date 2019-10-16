import React,{ Component } from 'react'
import {connect} from 'react-redux'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { SideNav, SideNavItem, Button, Icon} from 'react-materialize'

class NavBar extends Component {
    render(){
     const links = (this.props.auth.isAuthenticated)?<li><SignedInLinks/></li>:<li><SignedOutLinks/></li> 
      return(
        <div>  
            <nav className="deep-purple darken-4">
              {(this.props.auth.isAuthenticated)?<div className="show-on-medium-and-down">
                  
                  <SideNav trigger={<Button flat ><Icon className="white-text">dehaze</Icon></Button>} options={{closeOnClick: true}}>
                  <SideNavItem>
                  {links}
                  </SideNavItem>
                  </SideNav>
                  </div>:null}
              <div className="nav-wrapper">
                <a href="#!" className="brand-logo" style={{left: '65px'}}>ATMS</a>
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






