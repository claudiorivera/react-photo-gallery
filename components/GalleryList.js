import React from "react";
import usePhotos from "../util/usePhotos";
import GalleryItem from "./GalleryItem";

const GalleryList = () => {
  const { photos, isLoading, isError } = usePhotos();

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <div className="galleryList">
      {photos.map((photo) => (
        <GalleryItem key={photo._id} photo={photo} />
      ))}
      <style jsx>{`
        .galleryList {
          padding: 20px 20px;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
      `}</style>
    </div>
  );
};

export default GalleryList;
