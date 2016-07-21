import React from 'react';
import Slider from './Slider';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      txt: 'State txt',
      red: 0,
      green: 0,
      blue: 0,
      cat: 0
    }
    this.update = this.update.bind(this)
  }
  update(e) {
    this.setState({
      txt: e.target.value,
      red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value,
     })
  }
  render() {
    return (
      <div>
      { this.state.txt}
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
        {this.state.red}
        <Slider ref="red"  update={this.update} />
        {this.state.green}
        <Slider ref="green"  update={this.update} />
        {this.state.blue}
        <Slider ref="blue"  update={this.update} />
      </div>
    )
  }
}

const Widget = (props) => {
  return (
    <div>
      <div>Hola soy react</div>
      <h4>SI LO SOY</h4>
      <input type="text" onChange={props.update} />
      <h2>{props.txt}</h2>
    </div>
  )
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'SOY EL DEFAULT'
}

export default App;
