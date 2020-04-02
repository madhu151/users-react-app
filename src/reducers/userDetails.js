import { GET_ALL_USERS, DELETE_USER, ADD_USER } from '../constants';

const initialState = {
    userDetails: []
}

export const userDetailsReducer = (state = initialState, action) => {
    if (action.type === GET_ALL_USERS) {
        return { ...state, userDetails: action.payload };
    } else if (action.type === DELETE_USER) {
       
     //   return { ...state, userDetails: state.userDetails };

        // return  state.userDetails.splice(state.userDetails.findIndex(function (i) {
        //     console.log(i._id, action.payload.id)
        //     return i._id === action.payload.id;
        // }), 1);
        const newstate = state.userDetails.filter( val => val._id !== action.payload.id );
        console.log(newstate, 'newwwwwwwwwwwwwwwwwwwwwwwwwwwwwww')
        return {...state, userDetails: newstate};
    } else if(action.type === ADD_USER){
        return { ...state, userDetails: [ ...state.userDetails, action.payload ] };
    } else {
        return initialState;
    }
}