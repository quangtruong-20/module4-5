import React, {Component} from 'react';

//rcc
class StudentInfor extends Component {
    constructor() {
        super();
        this.state = {
            studentList : [
                {
                    id: '1',
                    name: 'Maria Anders',
                    age: '18',
                    address: 'Viet Nam',
                },
                {
                    id: '2',
                    name: 'Seo',
                    age: '19',
                    address: 'Germany',
                }
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.studentList.map(item => (
                    <tr  key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.address}</td>
                    </tr>
                ))}
            </div>
        );
    }
}

export default StudentInfor;