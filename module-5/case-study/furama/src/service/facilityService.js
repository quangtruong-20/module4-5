import axios from "axios";


export const findAll = async () => {
    try{
        const result = await  axios.get('http://localhost:8080/facility');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const getAllFacilityType = async () => {
    try{
        const result = await  axios.get('http://localhost:8080/facilityType');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const result = await  axios.get(`http://localhost:8080/facility/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const delete1 = async (id) => {
    try{
        const result = await  axios.delete(`http://localhost:8080/facility/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const save = async (facility) => {
    try{
        await  axios.post(`http://localhost:8080/facility`,{...facility});
    }catch (err){
        console.log(err);
    }
}

export const edit = async (facility) => {
    try{
        await  axios.put(`http://localhost:8080/facility/${facility.id}`,{...facility});
    }catch (err){
        console.log(err);
    }
}