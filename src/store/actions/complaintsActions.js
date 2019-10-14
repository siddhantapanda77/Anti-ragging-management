import axios from 'axios';

export const getComplaint = () => {
    return(dispatch) => {
        axios.get('https://sudonitesh-anti-ragging.herokuapp.com/api/complain/fetch_my_complains')
        .then(res =>
            dispatch({
            type: 'GET_COMPLAINT_SUCCESS',
            payload: res.data.data.reverse()
        })).catch(err => {
            window.location.reload();
            dispatch({
            type: 'GET_COMPLAINT_ERROR',
            err
        })})
    }
}
export const getAllComplaints = () => {
    return(dispatch) => {
        axios.get('https://sudonitesh-anti-ragging.herokuapp.com/api/complain/fetch_all')
        .then(res =>
            dispatch({
            type: 'GET_ALLCOMPLAINT_SUCCESS',
            payload: res.data.data.reverse()
        })).catch(err =>
            {
                window.location.reload();
                dispatch({
                    type: 'GET_ALLCOMPLAINT_ERROR',
                    err
                })
            } 
            
        )
    }
}

export const addComplaint = (complaint) => {
    return(dispatch) =>
    {
    axios.post("https://sudonitesh-anti-ragging.herokuapp.com/api/complain/new_complain", complaint)
    .then(res =>{
        console.log("Added")
        dispatch(getComplaint)}).catch(err =>
        {   //window.location.reload();
            dispatch({
            type: 'ADD_COMPLAINT_ERROR',
            err
        })} )
    }

}

export const resolveComplaints = (id) => {
    return(dispatch) => {
        console.log("console.log(id)")
        console.log(id)
        axios.post(`https://sudonitesh-anti-ragging.herokuapp.com/api/complain/resolve/${id}`)
        .then(res =>
            dispatch({
            type: 'COMPLAINT_RESOLVE_SUCCESS',
            payload: id
        })).catch(err => dispatch({
            type: 'COMPLAINT_RESOLVE_ERROR',
            err
        }))
    }
}
