import React, { Component } from "react";
import "./styles/GalleryItemImage.css";

export default class GalleryItemImage extends Component {
  render() {
    const { id, path, description } = this.props.photo;
    const { toggleShowDescription } = this.props;
    return (
      <img
        key={id}
        className="GalleryItemImage"
        src={path}
        alt={description}
        onClick={toggleShowDescription}
      />
    );
  }
}
