import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar'
import './App.css';
import SignUp from './components/Auth/SignUp';
import ComplaintsList from './components/Student/complaintsList';
import StudentDetails from './components/Student/StudentDetails';
import NewComplaint from './components/Student/NewComplaint';
import SignIn from './components/Auth/SignIn';
import SignUpAdmin from './components/Auth/SignUpAdmin'
import AllComplaints from './components/Admin/AllComplaints'
import AllUsers from './components/Admin/AllUsers';
import AllVolunteers from './components/Admin/AllVolunteers';
import AddVorS from './components/Admin/AddVorS';
import AllAdmins from './components/Admin/AllAdmins';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/addComplaints' component={NewComplaint}/>
            <Route exact path='/complaints' component={ComplaintsList}/>
            <Route exact path='/allComplaints' component={AllComplaints}/>
            <Route exact path='/' component={SignIn} />            
            
            <Route path='/profile' component={StudentDetails}/>         
            

            <Route path='/signup-admin' component={SignUpAdmin} />
            <Route path='/signup' component={SignUp} />

            <Route path='/allUsers' component={AllUsers} />
            <Route path='/allVolunteers' component={AllVolunteers} />
            <Route path='/allAdmin' component={AllAdmins} />
            <Route path='/addVolunteer' component={AddVorS} />
           
          </Switch>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
