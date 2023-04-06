import axios from "axios";

export const fetchApi = async () => {
    try {
        const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
       return result.data;
    } catch (err) {
        console.log(err);
    }
}

export const create = async (values) => {
    try {
     await axios.post('https://jsonplaceholder.typicode.com/todos', {title: values.title});
    } catch (err) {
        console.log(err);
    }
};