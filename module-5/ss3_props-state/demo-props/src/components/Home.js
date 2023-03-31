import {Component} from "react";

class Home extends Component{
    render() {
        return (
            <div>
                <div>
                    <h1>Welcom</h1>
                    <button onClick={this.props.onLogOut}>Log out</button>
                </div>
            </div>
        )
    }
}


export default Home;
