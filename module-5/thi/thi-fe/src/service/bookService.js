import axios from "axios";

export const findAll = async (name = "",page='') => {
    return await axios.get(`http://localhost:8080/api/books?name=${name}&page=${page}`);
}

export const findAllType = async () => {
    return await axios.get(`http://localhost:8080/api/bookTypes`);
}

export const save = async (book) => {
    return await axios.post(`http://localhost:8080/api/books`, {...book});
}
export const update = async (book) => {
    return await axios.put(`http://localhost:8080/api/books${book.id}`, {...book});
}

export const remove = async (id) => {
    return await axios.delete(`http://localhost:8080/api/books${id}`);
}

