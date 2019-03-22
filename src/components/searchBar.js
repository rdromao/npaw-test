import React from "react";
import { connect } from "react-redux";
import { searchAPICall } from "../actions";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchString: "" };

    this.handleSearchStringChange = this.handleSearchStringChange.bind(this);
  }
  handleSearchStringChange(e) {
    this.setState({ searchString: e.target.value });
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleSearchStringChange} />
        <button onClick={this.props.searchApi}>Search</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchApi: () => {
    dispatch(searchAPICall());
  }
});

SearchBar = connect(
  null,
  mapDispatchToProps
)(SearchBar);

export default SearchBar;
