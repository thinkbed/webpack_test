import './node_modules/bootstrap/scss/bootstrap.scss';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Parent extends Component{
  constructor(props){
    super(props);
      this.state = {"msg":'start'};
  }

  transferMsg(msg) {
    this.setState({
      msg
    });
  }

  componentDidUpdate() {
    console.log('Parent update');
  }

  render() {
    return (
      <div>
        <Child_1 transferMsg = {msg => this.transferMsg(msg)} />
        <Child_2 msg = {this.state.msg} />
      </div>
    );
  }
}

class Child_1 extends Component{
  componentDidMount() {
    setTimeout(() => {
      this.props.transferMsg('end')
    }, 1000);
  }

  componentDidUpdate() {
    console.log('Child_1 update');
  }

  render() {
    return <div>
      <p>child_1 component</p>
    </div>
  }
}

class Child_2 extends Component{
  componentDidUpdate() {
    console.log('Child_2 update');
  }

  render() {
    return <div>
      <p>child_2 component: {this.props.msg}</p>
      <Child_2_1 />
    </div>
  }
}

class Child_2_1 extends Component{
  componentDidUpdate() {
    console.log('Child_2_1 update');
  }

  render() {
    return <div>
      <p>child_2_1 component</p>
    </div>
  }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<Parent />, app);
