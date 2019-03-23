import React from "react";
import { connect } from "react-redux";
import AlbumResult from "./albumResult";
import { changeResultMode } from "../actions";
import Pagination from "react-js-pagination";

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }
  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber });
  }
  render() {
    const ITEMS_PER_PAGE = 20;
    return (
      <div className="resultsAndToolbarContainer">
        {this.props.albums.length > 0 && (
          <div className="resultsToolbar">
            <div
              className="toolbarButton"
              onClick={() =>
                this.props.changeResultMode(
                  this.props.resultsMode === "grid" ? "list" : "grid"
                )
              }
            >
              <i
                className={
                  "fas fa-" +
                  (this.props.resultsMode === "grid" ? "list" : "th")
                }
              />
              {" Show"}
              {this.props.resultsMode === "grid" ? " list" : " grid"} view
            </div>
          </div>
        )}
        <div className={"resultsContainer " + this.props.resultsMode}>
          {this.props.albums
            .slice(
              (this.state.activePage - 1) * ITEMS_PER_PAGE,
              this.state.activePage * ITEMS_PER_PAGE
            )
            .map(album => (
              <AlbumResult key={album.collectionId} album={album} />
            ))}
        </div>
        {this.props.albums.length > 0 && (
          <Pagination
            activePage={this.state.activePage}
            itemsCountPerPage={ITEMS_PER_PAGE}
            totalItemsCount={this.props.albums.length}
            onChange={this.handlePageChange}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.results,
    resultsMode: state.app.resultsMode
  };
};

const mapDispatchToProps = dispatch => ({
  changeResultMode: newMode => {
    dispatch(changeResultMode(newMode));
  }
});

Results = connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);

export default Results;
