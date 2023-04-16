import axios from "axios";

export const findAll = async ({ page, name}) => {
    return await axios.get(`http://localhost:8080/api/books?name=${name}&page=${page ? page : 0}`);
}
export const findById = async (id) => {
    return await axios.get(`http://localhost:8080/api/books/${id}`);
}

export const findAllType = async () => {
    return await axios.get(`http://localhost:8080/api/bookTypes`);
}

export const save = async (book) => {
    return await axios.post(`http://localhost:8080/api/books`, {...book});
}
export const update = async (book) => {
    return await axios.put(`http://localhost:8080/api/books/${book.id}`, {...book});
}

export const remove = async (id) => {
    return await axios.delete(`http://localhost:8080/api/books/${id}`);
}

