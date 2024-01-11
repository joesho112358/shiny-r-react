import React, { useState, Component } from 'react';
import { Container } from 'reactstrap'
import './App.css';
import SliderCell from './SliderCell';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      irisData: null
    }
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  componentDidMount() {
    window.$(document).on('shiny:connected', () => {
      this.setInputValues()
    })

    window.Shiny.addCustomMessageHandler('irisData', irisData =>
      this.setState({ irisData })
    )
  }

  componentDidUpdate() {
    this.setInputValues()
  }

  setInputValues() {
    window.Shiny.onInputChange('irisData', this.state.irisData)
  }

  handleSliderChange(value) {
    this.setState({ irisData: value })
  }

  render() {
    const { irisData } = this.state;

    const getTable = function(handleSliderChange, irisData) {
      let table = [];
      for(let i = 0; i < irisData['Sepal.Length'].length; i++) {
        table.push(
          <tr>
            <SliderCell
              state={irisData}
              data={irisData['Sepal.Length'][i] }
              column={'Sepal.Length'}
              index={i}
              options={ { min: "3.0", max: "7.0", step: "0.1" } }
              onChange={ handleSliderChange }
              />
            <SliderCell
              state={irisData}
              data={irisData['Sepal.Width'][i] }
              column={'Sepal.Width'}
              index={i}
              options={ { min: "3.0", max: "7.0", step: "0.1" } }
              onChange={ handleSliderChange }
              />
            <SliderCell
              state={irisData}
              data={irisData['Petal.Length'][i] }
              column={'Petal.Length'}
              index={i}
              options={ { min: "0.1", max: "5.0", step: "0.1" } }
              onChange={ handleSliderChange }
              />
            <SliderCell
              state={irisData}
              data={irisData['Petal.Width'][i] }
              column={'Petal.Width'}
              index={i}
              options={ { min: "0.1", max: "5.0", step: "0.1" } }
              onChange={ handleSliderChange }
              />
            <td>{ irisData['Species'][i] }</td>
          </tr>
          )
      }
      return table;
    }

    return (
      <Container fluid>
        <h2 className="mt-3">Iris Data</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Sepal.Length</th>
                <th scope="col">Sepal.Width</th>
                <th scope="col">Petal.Length</th>
                <th scope="col">Petal.Width</th>
                <th scope="col">Species</th>
              </tr>
            </thead>
            <tbody>
            {
              irisData &&
              getTable(this.handleSliderChange, irisData)
            }
            </tbody>
          </table>
      </Container>
    )
  }

};

export default App;
