import React, { Component } from "react";
import axios from "axios";
import "./styles/App.css";
import GalleryList from "./GalleryList";

export default class App extends Component {
  state = {
    photos: [],
  };

  componentDidMount = () => {
    this.getPhotos();
  };

  getPhotos = async () => {
    try {
      const { data } = await axios.get("/gallery");
      this.setState({ photos: data });
    } catch (err) {
      console.log(err);
    }
  };

  doLikePhoto = async (photo) => {
    await axios.put(`/gallery/like/${photo.id}`);
    this.getPhotos();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Photo Gallery</h1>
        </header>
        <GalleryList
          photos={this.state.photos}
          doLikePhoto={this.doLikePhoto}
        />
      </div>
    );
  }
}
