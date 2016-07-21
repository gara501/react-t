import React from 'react';
class Slider extends React.Component {
  render() {
    return (
      <div>
        <input ref="inp" type="range" min="0" max="255" 
          onChange={this.props.update} />
      </div>
    )
  }
}

export default Slider;
