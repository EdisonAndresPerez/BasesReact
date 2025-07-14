import { ImageListItem, ImageList } from "@mui/material";

export const ImageGallery = () => {
  return (
    <ImageList sx={{ width: "100%", height: 500 }} cols={4} rowHeight={200}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

const itemData = [
  {
    img: "/imagenes/foto1.jpg",
    title: "foto1",
  },
  {
    img: "/imagenes/foto2.jpg",
    title: "foto2",
  },
  {
    img: "/imagenes/foto3.jpg",
    title: "foto3",
  },
  {
    img: "/imagenes/foto4.jpg",
    title: "foto4",
  },
  {
    img: "/imagenes/foto5.jpg",
    title: "foto5",
  },
  {
    img: "/imagenes/foto6.jpg",
    title: "foto6",
  },
  {
    img: "/imagenes/foto7.jpg",
    title: "foto7",
  },
  {
    img: "/imagenes/foto8.jpg",
    title: "foto8",
  },
  {
    img: "/imagenes/foto9.jpg",
    title: "foto9",
  },
  {
    img: "/imagenes/foto5.jpg",
    title: "foto5",
  },
  {
    img: "/imagenes/foto3.jpg",
    title: "foto3",
  },
  {
    img: "/imagenes/foto8.jpg",
    title: "foto8",
  },
];
