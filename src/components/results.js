import React from "react";
import { connect } from "react-redux";
import AlbumResult from "./albumResult";

class Results extends React.Component {
  render() {
    return (
      <div className="resultsContainer">
        {this.props.albums.map(album => (
          <AlbumResult key={album.collectionId} album={album} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums.results
  };
};

Results = connect(
  mapStateToProps,
  null
)(Results);

export default Results;
