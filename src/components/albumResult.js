import React from "react";

let AlbumResult = props => (
  <div className="albumResultContainer">
    <div>
      <img alt={props.album.collectionName} src={props.album.artworkUrl100} />
    </div>
    <div className="albumInfoContainer">
      <div className="albumTitle">
        <b>Album: </b>
        {props.album.collectionName.length > 30
          ? props.album.collectionName.substr(0, 29) + "…"
          : props.album.collectionName}
      </div>
      <div className="albumArtist">
        <b>Artist: </b>
        {props.album.artistName.length > 30
          ? props.album.artistName.substr(0, 29) + "…"
          : props.album.artistName}
      </div>
    </div>
  </div>
);

export default AlbumResult;
