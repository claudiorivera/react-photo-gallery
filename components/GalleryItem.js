import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { mutate } from "swr";

const axios = require("axios").default;

const GalleryItem = ({ photo }) => {
  const [isDescShowing, setIsDescShowing] = useState(false);

  const toggleShowDescription = () => {
    setIsDescShowing(!isDescShowing);
  };

  const handleLike = async (photo) => {
    try {
      await axios.put(`/api/photos/${photo._id}`);
      mutate("/api/photos");
    } catch (error) {
      console.log(error);
    }
  };

  const Description = () => (
    <div>
      <div className="galleryItemDescription" onClick={toggleShowDescription}>
        {photo.description}
      </div>
      <style jsx>
        {`
          .galleryItemDescription {
            background-color: #666;
            color: #fff;
            cursor: pointer;
            width: 200px;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        `}
      </style>
    </div>
  );

  const Image = () => (
    <div>
      <img
        className="galleryItemImage"
        src={photo.path}
        alt={photo.description}
        onClick={toggleShowDescription}
      />
      <style jsx>
        {`
          .galleryItemImage {
            cursor: pointer;
            height: 200px;
            width: 200px;
          }
        `}
      </style>
    </div>
  );

  const LikeBar = () => (
    <div className="likeBar">
      <button
        onClick={() => {
          handleLike(photo);
        }}
      >
        <FontAwesomeIcon icon={faHeart} />
      </button>
      <div id="numOfLikes">{photo.likes}</div>
      <style jsx>
        {`
          .likeBar {
            display: flex;
            align-items: center;
            height: 30px;
          }

          .likeBar button {
            cursor: pointer;
            color: #d00;
            border: none;
            font-size: 1rem;
            background-color: transparent;
          }

          .likeBar button:hover {
            color: #f00;
          }

          #numOfLikes {
            font-size: 1rem;
          }
        `}
      </style>
    </div>
  );

  let galleryItemToDisplay = isDescShowing ? <Description /> : <Image />;
  return (
    <div className="galleryItem">
      {galleryItemToDisplay}
      <LikeBar />
      <style jsx>
        {`
          .galleryItem {
            margin: 10px;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

export default GalleryItem;
