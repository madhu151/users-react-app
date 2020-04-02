import { GET_ALL_USERS, DELETE_USER } from '../constants';

export const getAllUsers = () => {
    return dispach => {
        fetch('http://localhost:5000/getAllUsers')
            .then(res => res.json())
            .then(json => {
                dispach({
                    type: GET_ALL_USERS,
                    payload: json
                })
            })
            .catch(err =>{
                console.log(err, 'get all api,,,,,,,,,,')
            })
    }
}

export const deleteUser = (id) => {
    return dispach => {
        fetch(`http://localhost:5000/deleteUser/${id}`, {method: 'DELETE'})
        .then(res =>{
            console.log( 'delete api,suceee,,,,,,,,,');
            dispach({
                type: DELETE_USER,
                payload: {id}
            })
        })
        .catch(err =>{
            console.log(err, 'delete api,,,,errrrrrrrrrrr,,,,,,')
        })
    }
}

// let response = await fetch('/article/fetch/post/user', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
//   });
  