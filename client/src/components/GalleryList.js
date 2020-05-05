import React, { Component } from "react";
import GalleryItem from "./GalleryItem";
import "./styles/GalleryList.css";

export default class GalleryList extends Component {
  render() {
    return (
      <div className="GalleryList">
        {this.props.photos.map((photo, index) => (
          <GalleryItem
            photo={photo}
            key={index}
            doLikePhoto={this.props.doLikePhoto}
          />
        ))}
      </div>
    );
  }
}
