import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return(        
        <ul id="nav-mobile" className="right">
            <li><NavLink to='/'>Login</NavLink></li>
            <li><NavLink to='/signup' className="waves-effect waves-light btn-small">Signup</NavLink></li>
        </ul>
             
    )
}

export default SignedOutLinks;