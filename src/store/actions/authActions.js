import axios from 'axios'
import jwtDecode from 'jwt-decode'

export function setCurrentUser(user){
    console.log("user");
    console.log(user);
    return{
        type: "SET_USER",
        user
    }

}
export const logout = ()=>{
    return dispatch=>{
          localStorage.clear();
          dispatch(setCurrentUser({}));
          
    }
}

export function  login(data) {
    return dispatch => {
        return axios.post("https://sudonitesh-anti-ragging.herokuapp.com/api/auth/sign_in", data).then(res =>
            {
                console.log('res.data.data.token')
                console.log(res.data.data.token)
                const token = res.data.data.token;
                console.log(token);
                localStorage.setItem('jwtToken', token);
                dispatch(setCurrentUser(jwtDecode(token)));
            }
        );
    }

    
}
export function  signup(user) {
    return dispatch => {
        return axios.post("https://sudonitesh-anti-ragging.herokuapp.com/api/auth/register_acc", user).then(res =>
            {
            //    console.log('res.data.data.token')
                // console.log(res.data.data.token)

                dispatch({
                    type: "SIGNUP_USER",
                    payload: res.data
                });
                // dispatch(setCurrentUser(res.data));
            }
        ).catch(err => dispatch({
            type: "SIGNUP_USER_ERROR",
                    payload: err
        }))
    }

    
}