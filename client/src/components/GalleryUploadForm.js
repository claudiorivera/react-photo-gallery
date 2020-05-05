import React, { Component } from "react";
import "./styles/GalleryUploadForm.css";

export default class GalleryUploadForm extends Component {
  render() {
    return (
      <form className="GalleryUploadForm">
        <label htmlFor="newPhotoFile">Upload new photo:</label>
        <input type="file" id="newPhotoFile" name="newPhotoFile"></input>
      </form>
    );
  }
}
