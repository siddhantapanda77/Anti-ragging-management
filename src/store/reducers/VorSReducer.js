const initState = {}

const complaintsReducer = (state = initState, action) => {
    switch(action.type)
    {
        case 'GET_STUDENTS_SUCCESS':
            console.log(action.payload)
            return({
                ...state,
                users: action.payload
            })
        case 'GET_STUDENTS_ERROR':
            console.log(" Not able to get your complaint");
            return({
                ...state
            })
            case 'GET_VOLUNTEERS_SUCCESS':
            console.log(action.payload)
            return({
                ...state,
                volunteers: action.payload
            })
            case 'GET_VOLUNTEERS_ERROR':
            console.log(" Not able to get your complaint");
            return({
                ...state
            })
            case 'GET_ADMINS_SUCCESS':
            console.log(action.payload)
            return({
                ...state,
                admins: action.payload
            })
           case 'GET_ADMINS_ERROR':
            console.log(" Not able to get your complaint");
            return({
                ...state
            })
            case 'GET_1STUDENT_SUCCESS':
                    console.log(action.payload)
                    return({
                        student: action.payload
                    })
            case 'GET_1STUDENT_ERROR':
                console.log(" Not able to get your profile");
                return({
                    ...state
                })
            case 'REMOVE_VOLUNTEER': 
                console.log(state.volunteers.length)
                return ({
                        ...state,
                        volunteers: [...state.volunteers.filter(volunteer => volunteer.id === action.id)],
                      })
                    
        default: return({
            ...state
        })
    }

}

export default complaintsReducer;