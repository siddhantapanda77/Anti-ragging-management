const initState = {}

const complaintsReducer = (state = initState, action) => {
    switch(action.type)
    {
        case 'GET_COMPLAINT_SUCCESS':
            console.log(action.payload)
            return({
                ...state,
                complaints: action.payload
            })
        case 'GET_COMPLAINT_ERROR':
            console.log(" Not able to get your complaint");
            return({
                ...state
            })
        case 'GET_ALLCOMPLAINT_SUCCESS':
                    console.log(action.payload)
                    return({
                        ...state,
                        complaints: action.payload
                    })
        case 'GET_ALLCOMPLAINT_ERROR':
                    console.log(" Not able to get your complaint");
                    return({
                        ...state
                    })
        case 'ADD_COMPLAINT_ERROR':
            console.log(" Not able to add your complaint");
            return({
                ...state
            })
        case 'COMPLAINT_RESOLVE_SUCCESS':
            console.log('COMPLAINT_RESOLVE_SUCCESS')
            console.log(state)//Complaints is recieved as object. So state.complaints is an array.
            state.complaints.map(com=>{
                if(com.complain.comp_id==action.payload){
                    return{
                        ...state,
                        complaints: [...state.complaints, com.complain.status='resolved']
                    }

                }
            })
            return({
                ...state, 
            })
        case 'COMPLAINT_RESOLVE_ERROR':
            console.log(" Not able to get your complaint");
            return({
                ...state
            })
        case 'UPDATE_ERROR':
            console.log(" Not able to update your profile");
            return({
                ...state
            })
        default: return({
            ...state
        })
    }

}

export default complaintsReducer;