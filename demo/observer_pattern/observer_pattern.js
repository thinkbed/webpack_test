import eventProxy from './eventProxy'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Parent extends Component{
    
    componentDidUpdate() {
        console.log('Parent update');
    }

    render(){
        return(
            <div>
                <Clild_1/>
                <Clild_2/>
            </div>
        );
    }
}

class Clild_1 extends Component{
    componentDidUpdate() {
        console.log('Child_1 update');
    }

    componentDidMount() {
        setTimeout(() => {
            eventProxy.trigger('msg', 'end');
        }, 1000);
    }

    render() {
        return(
            <div>
                <p>Child_1 component</p>
            </div>
        );
    }
}

class Clild_2 extends Component{
    constructor(props){
        super(props);
        this.state = {"msg": 'start'};
    }

    componentDidUpdate() {
        console.log('Child_2 update');
    }

    componentDidMount() {
        eventProxy.on('msg', (msg) => {
            this.setState({msg
            });
        });
    }

    render(){
        return(
            <div>
                <p>child_2 component: {this.state.msg}</p>
                <Child_2_1/>
            </div>
        );
    }
}

class Child_2_1 extends Component{
    componentDidUpdate(){
        console.log('Child_2_1 update');
    }

    render() {
        return(
            <div>
                <p>child_2_1 component</p>
            </div>
        );
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Parent />, app);
