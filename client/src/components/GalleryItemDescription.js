import React, { Component } from "react";
import "./styles/GalleryItemDescription.css";

export default class GalleryItemDescription extends Component {
  render() {
    const { description } = this.props.photo;
    const { toggleShowDescription } = this.props;
    return (
      <div className="GalleryItemDescription" onClick={toggleShowDescription}>
        {description}
      </div>
    );
  }
}
