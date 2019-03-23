import React from "react";

const MAX_CHARS = 30;

let AlbumResult = props => (
  <div className="albumResultContainer">
    <div>
      <img alt={props.album.collectionName} src={props.album.artworkUrl100} />
    </div>
    <div className="albumInfoContainer">
      <div className="albumTitle">
        <b>Album: </b>
        {props.album.collectionName.length > MAX_CHARS
          ? props.album.collectionName.substr(0, MAX_CHARS - 1) + "…"
          : props.album.collectionName}
      </div>
      <div className="albumArtist">
        <b>Artist: </b>
        {props.album.artistName.length > MAX_CHARS
          ? props.album.artistName.substr(0, MAX_CHARS - 1) + "…"
          : props.album.artistName}
      </div>
    </div>
  </div>
);

export default AlbumResult;
