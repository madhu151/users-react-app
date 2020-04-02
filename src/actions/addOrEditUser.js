import { ADD_USER, EDIT_USER } from '../constants';

export const addOrUpdateUser = (id, body, operation) => {
    return dispach => {
        let url = operation === 'add' ? 'http://localhost:5000/createUser' : `http://localhost:5000/editUser/${id}`;
        const method = operation === 'add' ? 'POST' : 'PUT';
        fetch(url, { method, body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
            .then(res => {
                const type = operation === 'add' ? ADD_USER : EDIT_USER;
                dispach({
                    type,
                    payload: res.json()
                })
            })
            .catch(err => {
                console.log(id, body, operation, 'addOrUpdateUser api,,,,,,,,,,')
            })
    }
}
