import axios from "axios";

const initial = axios.create({
    baseURL: 'http://localhost:3000/api/',
    headers: {
        'Content-Type': 'application/json'
    }
})

export const login = {
    getLogin(data) {
        const jsonData = JSON.stringify(data);
        return initial.post('login', jsonData);
    },
    register(data) {
        const jsonData = JSON.stringify(data);
        return initial.post('registration', jsonData);
    }
}

export const notes = {
    addNotes(data) {
        const jsonData = JSON.stringify(data);
        return initial.post('add-notes', jsonData);
    },
    getNotes(userId) {
        return initial.get(`notes/${userId}`).then(res => res.data.body);
    }, 
    delNotes(data) {
        const jsonData = JSON.stringify(data);
        return initial.delete('del-notes', {
            data: jsonData
        });
    }
}