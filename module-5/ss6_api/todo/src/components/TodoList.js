import {useEffect, useState} from "react";
import axios from "axios";
import {Field, Form, Formik} from "formik";

export default function TodoList() {
        const [list,setList] = useState([]);
        useEffect(()=> {
        const fetchApi = async () => {
          try  {
              const result = await axios.get('https://jsonplaceholder.typicode.com/todos');
                setList(result.data);
          }catch (err){
              console.log(err);
          }
        }
        fetchApi();


        },[]);

    return(

        <>
    <Formik initialValues={{title:''}} onSubmit={(values)=> {
        const create = async () => {
            try {
                const result = await axios.post('https://jsonplaceholder.typicode.com/todos',{title: values.title});
                setList([...list,result.data]);
                alert("tạo thành công")
            } catch (err) {
                console.log(err);
            }
        };

        create();

    }
    }>
        <Form>

            <h1>Todo List</h1>
            <Field name={'title'} type="text"/>
            <button type={'submit'}>Submit</button>
        </Form>

    </Formik>

            {
                list.map((value,index) =>(
                    <tr key={index}>
                        <td>{value.title}</td>
                    </tr>

                ))
            }
        </>
    )

}