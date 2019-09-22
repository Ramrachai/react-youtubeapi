import React, { Component } from "react";

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }
  onFormSubmit(e) {
    e.preventDefault();
    //make sure we call
    //callback from parent component
  }
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div class="field">
            <label>Video Search</label>
            <input
              type="text"
              placeholder="Type and Press Enter"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
