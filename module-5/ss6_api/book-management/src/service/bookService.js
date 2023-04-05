import axios from "axios";


export const findAll = async () => {
    try{
        const result = await  axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const result = await  axios.get(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
        console.log(result.data)
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const delete1 = async (id) => {
    try{
        const result = await  axios.delete(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const save = async (book) => {
    try{
        await  axios.post(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books`,{...book});
    }catch (err){
        console.log(err);
    }
}


export const edit = async (id, book) => {
    try {
        await axios.put(`https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`, {...book});
    } catch (err) {
        console.log(err);
    }
}



