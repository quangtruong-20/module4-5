import axios from "axios";


export const findAll = async () => {
    try{
        const result = await  axios.get('http://localhost:3000/books');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const getAllBookType = async () => {
    try{
        const result = await  axios.get('http://localhost:3000/bookType');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const result = await  axios.get(`http://localhost:3000/books/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const delete1 = async (id) => {
    try{
        const result = await  axios.delete(`http://localhost:3000/books/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const save = async (book) => {
    try{
        await  axios.post(`http://localhost:3000/books`,{...book});
    }catch (err){
        console.log(err);
    }
}

export const edit = async (book) => {
    try{
        await  axios.put(`http://localhost:3000/books/${book.id}`,{...book});
    }catch (err){
        console.log(err);
    }
}




