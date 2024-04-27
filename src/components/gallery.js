import GalleryItem from "./galleryItem";

function Gallery(props) {
  const display = props.data.map((item, index) => {
    return <GalleryItem key={index} item={item} />;
  });

  return <div>{display}</div>;
}

export default Gallery;
