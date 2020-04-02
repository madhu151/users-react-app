export const addOrEditUserReducer = () =>{
    return {}
}

// import { GET_ALL_USERS, DELETE_USER } from '../constants';

// const initialState = {
//     userDetails: []
// }

// export const userDetailsReducer = (state = initialState, action) => {
//     if (action.type === GET_ALL_USERS) {
//         return { ...state, userDetails: action.payload };
//     } else if (action.type === DELETE_USER) {
//         state.userDetails.splice(state.userDetails.findIndex(function (i) {
//             console.log(i._id, action.payload.id)
//             return i._id === action.payload.id;
//         }), 1);
//         console.log(action.payload.id,'rrrrrrrrrrrrrrrrr', state.userDetails)
//         return { ...state, userDetails: state.userDetails }
//        // return { ...state, userDetails: state.userDetails.splice(1, action.payload.index)};
//     } else {
//         return initialState;
//     }
// }