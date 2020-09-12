import React from 'react';


class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Company:'FB'
    }
    this.onChangeValue = this.onChangeValue.bind(this);
  }


  onChangeValue(event) {
    console.log(event.target.value);
  }


  

  render() {
    return (
      <div>
        <h1>Stock Market</h1>
    <h1>Current Company {this.state.Company}</h1>

    <div onChange={this.onChangeValue}>
        <input type="radio" value="FB" name="gender" /> Facebook
        <input type="radio" value="MSFT" name="gender" /> Microsoft
        <input type="radio" value="AMZ" name="gender" /> Amazon
      </div>


        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'green'},
            }
          ]}
          layout={{width: 720, height: 440, title: 'Live Company Stats'}}
        />
      </div>
    )
  }
}

export default Stock;