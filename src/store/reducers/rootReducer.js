import { combineReducers} from 'redux'
import complaintsReducer from './complaintsReducer'
import authReducer from './authReducer'
import VorSReducer from './VorSReducer'


const rootReducer = combineReducers({
    complaintsList: complaintsReducer,
    auth: authReducer,
    users: VorSReducer,
    volunteers: VorSReducer,
    admins: VorSReducer,
    student: VorSReducer
    
  })
  
export default rootReducer