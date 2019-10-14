const initState ={
    user:{},
    isAuthenticated:false
}

const authReducer = (state=initState,action)=>{
           switch(action.type){
           case "SET_USER" : return{
                   ...state,
                   user:action.user,
                   isAuthenticated: !!Object.keys(action.user).length
           }
           case "SIGNUP_USER" : return{
            ...state,
            user:action.user,
            isAuthenticated: !!Object.keys(action.user).length
    }
            case "SIGNUP_USER_ERROR" : 
            {
                console.log("Error in signing up");
                return{
                ...state
        }}
          default : return state;
       }
}

export default authReducer;