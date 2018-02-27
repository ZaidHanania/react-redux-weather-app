import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }; // Local state, not app state

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value }); // 'this' needs to be binded in constructor
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return(
      <form 
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input 
          placeholder="Enter a US city to get weather forecast"
          className="form-control"
          value={this.state.term} 
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather } , dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
