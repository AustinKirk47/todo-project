import axios from 'axios'
import {REST_URL} from '../Constant'

class ToDoDataService {

    retrieveAllTodos() {
        return axios.get(`${REST_URL}`);
    }

    retrieveTodo(id) {
        return axios.get(`${REST_URL}/${id}`);
    }

    deleteTodo(id) {
        return axios.delete(`${REST_URL}/${id}`);
    }

    updateTodo(id, todo) {
        return axios.put(`${REST_URL}/${id}`, todo);
    }

    createTodo(todo) {
        return axios.post(`${REST_URL}`, todo);
    }

}

export default new ToDoDataService()