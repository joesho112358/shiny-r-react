import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';


class SliderCell extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { state, value, column, index, options, onChange } = this.props

    const SliderChange = (e) => {
      let iris = state;
      iris[column][index] = parseInt(e.target.value);
      this.setState({ irisData: iris })
      return onChange(iris);
    }

    return (
      <td>
        <div style={{textAlign: 'center'}}>
          <span>{state[column][index]}</span>
        </div>
        <div>
          <Input
            type="range"
            min={options.min}
            max={options.max}
            step={options.step}
            value={value}
            onChange={ e => SliderChange(e) } />
        </div>
      </td>
    )
  }
}

SliderCell.propTypes = {
  state: PropTypes.object.isRequired,
  value: PropTypes.number,
  column: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  options: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,

}

export default SliderCell
