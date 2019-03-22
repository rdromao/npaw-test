import React from "react";
import { connect } from "react-redux";
import { searchAPICall } from "../actions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchString: "" };

    this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.searchableString = this.searchableString.bind(this);
  }
  handleSearchStringChange(e) {
    this.setState({ searchString: e.target.value });
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.searchApi(this.state.searchString);
    }
  }
  searchableString() {
    return (
      this.state.searchString &&
      0 !== this.state.searchString.length &&
      /\S/.test(this.state.searchString)
    );
  }
  render() {
    return (
      <div>
        <input
          type="text"
          onKeyPress={this.handleKeyPress}
          onChange={this.handleSearchStringChange}
        />
        <button
          disabled={!this.searchableString()}
          onClick={() => this.props.searchApi(this.state.searchString)}
        >
          Search
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchApi: terms => {
    dispatch(searchAPICall(terms));
  }
});

SearchBar = connect(
  null,
  mapDispatchToProps
)(SearchBar);

export default SearchBar;
