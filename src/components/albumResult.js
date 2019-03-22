import React from "react";

let AlbumResult = props => (
  <div className="albumResultContainer">
    <div>
      <img alt={props.album.collectionName} src={props.album.artworkUrl100} />
    </div>
    <div className="albumTitle">
      {props.album.collectionName.length > 30
        ? props.album.collectionName.substr(0, 29) + "…"
        : props.album.collectionName}
    </div>
  </div>
);

export default AlbumResult;
