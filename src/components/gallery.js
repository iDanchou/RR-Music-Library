import { useContext } from "react";
import { DataContext } from "../context/DataContext";

import GalleryItem from "./galleryItem";

const Gallery = () => {
  const data = useContext(DataContext);
  const display = data.map((item, index) => {
    return <GalleryItem key={index} item={item} />;
  });

  return <div>{display}</div>;
};

export default Gallery;
