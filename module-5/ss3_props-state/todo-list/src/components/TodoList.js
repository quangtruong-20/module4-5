import React, {Component} from 'react';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list : [],
            item : ''
        }
    }

    handleChange = (event) => {
        this.setState({
            item : event
        })
    }

    handleAddItem = () => {
        let newArr = [...this.state.list,this.state.item]
        this.setState({
            list : newArr,
            item : ''
        })
    }
    render() {
        return (
            <div>
                <input value={this.state.item}
                onChange={(event) =>this.handleChange(event.target.value) }/>
                <button onClick={() => this.handleAddItem()}>Add</button>

                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default TodoList;