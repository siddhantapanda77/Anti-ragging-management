import axios from 'axios';

export const getAllStudents = () => {
    return(dispatch) => {
        axios.get('https://sudonitesh-anti-ragging.herokuapp.com/api/profile/get_students')
        .then(res =>
            dispatch({
            type: 'GET_STUDENTS_SUCCESS',
            payload: res.data.data
        })).catch(err => dispatch({
            type: 'GET_STUDENTS_ERROR',
            err
        }))
    }
}

export const getSingleStudent = () => {
    return(dispatch) => {
        axios.get('https://sudonitesh-anti-ragging.herokuapp.com/api/profile/self')
        .then(res =>
            dispatch({
            type: 'GET_1STUDENT_SUCCESS',
            payload: res.data.data
        })).catch(err => dispatch({
            type: 'GET_1STUDENT_ERROR',
            err
        }))
    }
}

export const getAllVolunteers = () => {
    return(dispatch) => {
        axios.get('https://sudonitesh-anti-ragging.herokuapp.com/api/profile/get_volunteers')
        .then(res =>
            dispatch({
            type: 'GET_VOLUNTEERS_SUCCESS',
            payload: res.data.data
        })).catch(err => dispatch({
            type: 'GET_VOLUNTEERS_ERROR',
            err
        }))
    }
}

export const getAllAdmins = () => {
    return(dispatch) => {
        axios.get('https://sudonitesh-anti-ragging.herokuapp.com/api/profile/get_admins')
        .then(res =>
            dispatch({
            type: 'GET_ADMINS_SUCCESS',
            payload: res.data.data
        })).catch(err => dispatch({
            type: 'GET_ADMINS_ERROR',
            err
        }))
    }
}

export const updateDetails = (data) => {
    return(dispatch) => {
        axios.post('https://sudonitesh-anti-ragging.herokuapp.com/api/profile/update_profile',data)
            .then(res => 
                dispatch(getSingleStudent())
            ).catch(
                err=> dispatch({
                    type: 'UPDATE_ERROR',
                    err  
                })
            )
    }
}

export const removeVolunteer = (id) => {
    console.log("jnnninininn")
   return(dispatch) => dispatch({
        type: 'REMOVE_VOLUNTEER',
        payload: id
    })
}