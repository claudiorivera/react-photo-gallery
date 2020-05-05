import React, { Component } from "react";
import GalleryItemDescription from "./GalleryItemDescription";
import GalleryItemImage from "./GalleryItemImage";
import LikeBar from "./LikeBar";
import "./styles/GalleryItem.css";

export default class GalleryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isDescShowing: false,
    };
  }

  toggleShowDescription = () => {
    this.setState((state) => ({ isDescShowing: !state.isDescShowing }));
  };

  render() {
    let galleryItemToDisplay = this.state.isDescShowing ? (
      <GalleryItemDescription
        photo={this.props.photo}
        toggleShowDescription={this.toggleShowDescription}
      />
    ) : (
      <GalleryItemImage
        photo={this.props.photo}
        toggleShowDescription={this.toggleShowDescription}
      />
    );
    return (
      <div className="GalleryItem">
        {galleryItemToDisplay}
        <LikeBar
          photo={this.props.photo}
          doLikePhoto={this.props.doLikePhoto}
        />
      </div>
    );
  }
}
