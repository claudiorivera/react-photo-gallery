import React, { Component } from "react";
import "./styles/LikeBar.css";

export default class LikeBar extends Component {
  render() {
    const { id, likes } = this.props.photo;
    const doLikePhoto = () => {
      this.props.doLikePhoto(this.props.photo);
    };

    return (
      <div className="LikeBar">
        <button onClick={doLikePhoto} id={id}>
          <i className="fas fa-heart"></i>
        </button>
        <div id="numOfLikes">{likes}</div>
      </div>
    );
  }
}
