import axios from "axios";


export const findAll = async () => {
    try{
        const result = await  axios.get('http://localhost:3000/facilities');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const getAllFacilityType = async () => {
    try{
        const result = await  axios.get('http://localhost:3000/facilityType');
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const findById = async (id) => {
    try{
        const result = await  axios.get(`http://localhost:3000/facilities/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const delete1 = async (id) => {
    try{
        const result = await  axios.delete(`http://localhost:3000/facilities/${id}`);
        return result.data;
    }catch (err){
        console.log(err);
    }
}

export const save = async (facility) => {
    try{
        await  axios.post(`http://localhost:3000/facilities`,{...facility});
    }catch (err){
        console.log(err);
    }
}

export const edit = async (facility) => {
    try{
        await  axios.put(`http://localhost:3000/facilities/${facility.id}`,{...facility});
    }catch (err){
        console.log(err);
    }
}

const facilityService = {
    findAll,getAllFacilityType,edit,delete1,findById,
    save
}

export default facilityService
