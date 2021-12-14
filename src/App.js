import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        countries : [],
        states : [],
        cities : [],
        selectedCountry : 'Country',
        selectedState : 'State'
    };
    this.changeCountry = this.changeCountry.bind(this);
    this.changeState = this.changeState.bind(this);
}

componentDidMount() {
    this.setState({
        countries : [
            { name: 'Philippines', states: [ 
                {name: 'Central Luzon', cities: ['Angeles City', 'Olongapo', 'San Fernando']},
                {name: 'NCR', cities: ['Pasay City', 'Makati', 'Marikina']}
            ]},
            { name: 'India', states: [ 
                {name: 'Madhya Pradesh', cities: ['Indore', 'Bhopal', 'Harda']},
                {name: 'West Bengal', cities: ['Kolkata', 'Alipurduar', 'Bankura']},
                {name: 'Karnataka', cities: ['Shivamogga', 'Udupi', 'Vijayapura', 'Bengalore']},
            ]}
                 
        ]
    });
}

changeCountry(event) {
    this.setState({selectedCountry: event.target.value});
    this.setState({states : this.state.countries.find(cntry => cntry.name === event.target.value).states});
}

changeState(event) {
    this.setState({selectedState: event.target.value});
    const stats = this.state.countries.find(cntry => cntry.name === this.state.selectedCountry).states;
    this.setState({cities : stats.find(stat => stat.name === event.target.value).cities});
}
  render() {
    return (
      <div className="container">
                <div className="row">
                <h2>ReactJS Dependent Dropdown List</h2>

                <input type="text" />
     
                <div className="form-group">
                    <label style={styles.lbl}>Country</label>
                    <select className="form-select" placeholder="Country" value={this.state.selectedCountry} onChange={this.changeCountry}>
                        <option>Country</option>
                        {this.state.countries.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
 
                <div className="form-group">
                    <label style={styles.lbl}>State</label>
                    <select className="form-select" placeholder="State" value={this.state.selectedState} onChange={this.changeState}>
                        <option>State</option>
                        {this.state.states.map((e, key) => {
                            return <option key={key}>{e.name}</option>;
                        })}
                    </select>
                </div>
                 
                <div className="form-group">
                    <label style={styles.lbl}>City</label>
                    <select className="form-select" placeholder="City">
                        <option>City</option>
                        {this.state.cities.map((e, key) => {
                            return <option key={key}>{e}</option>;
                        })}
                    </select>
                </div>
                
                </div>
            </div>
    )
  }
}

const styles = {
  lbl: {
    marginTop: 5,
    marginBottom: 5,
  },  
  btn: {
    width:250,
    marginLeft:15,
    marginTop: 15,
  }
};

export default App;
