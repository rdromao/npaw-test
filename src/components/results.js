import React from "react";
import { connect } from "react-redux";
import AlbumResult from "./albumResult";
import { changeResultMode } from "../actions";

class Results extends React.Component {
  render() {
    return (
      <div className="resultsAndToolbarContainer">
        {this.props.albums.length > 0 && (
          <div className="resultsToolbar">
            <div
              className={
                "toolbarButton" +
                (this.props.resultsMode !== "grid" ? " inactive" : "")
              }
              onClick={() => this.props.changeResultMode("grid")}
            >
              <i className="fas fa-th" />
            </div>
            <div
              className={
                "toolbarButton" +
                (this.props.resultsMode !== "list" ? " inactive" : "")
              }
              onClick={() => this.props.changeResultMode("list")}
            >
              <i className="fas fa-list" />
            </div>
          </div>
        )}
        <div className={"resultsContainer " + this.props.resultsMode}>
          {this.props.albums.map(album => (
            <AlbumResult key={album.collectionId} album={album} />
          ))}
        </div>
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
