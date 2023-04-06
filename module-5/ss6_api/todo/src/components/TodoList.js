import {useEffect, useState} from "react";
import {Field, Form, Formik} from "formik";
import * as todoService from '../service/todoService'

export default function TodoList() {
    const [list, setList] = useState([]);
    useEffect(() => {
        const todoList = async () => {
            try {
                const result = await todoService.fetchApi()
                setList(result)
            } catch (err) {
                console.log(err);
            }
        }
        todoList();


    }, []);

    return (

        <>
            <Formik initialValues={{title: ''}} onSubmit={(values) => {
                const add = async () => {
                    try {
                        const result = await todoService.create(values)
                        setList([...list, result.data]);
                        alert("tạo thành công")
                    } catch (err) {
                        console.log(err);
                    }
                };

                add();

            }
            }>
                <Form>

                    <h1>Todo List</h1>
                    <Field name={'title'} type="text"/>
                    <button type={'submit'}>Submit</button>
                </Form>

            </Formik>

            {
                list.map((value, index) => (
                    <tr key={index}>
                        <td>{value.title}</td>
                    </tr>

                ))
            }
        </>
    )

}