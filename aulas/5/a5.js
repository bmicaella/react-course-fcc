import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function AlbumList() {
  return (
    <section className="albumlist">
      <Album />
      <Album />
      <Album />
      <Album />
      <Album />
    </section>
  );
}

const Album = () => {
  return (
    <article className="album">
      <Image />
      <Title />
      <Artist />
    </article>
  );
};

const Image = () => (
  <img
    className="imgAlbum"
    src="https://upload.wikimedia.org/wikipedia/pt/8/8f/The_Most_Beautiful_Moment_in_Life%2C_Part_2_-_%28EP%29.jpg"
    alt="The Most Beautiful Moment in Life PT. 2"
  />
);

const Title = () => (
  <h1 style={{ fontSize: "22px" }}>The Most Beautiful Moment In Life PT. 2</h1>
);
const Artist = () => <h3 style={{ color: "grey" }}>Bangtan Sonyeondan</h3>;

ReactDom.render(<AlbumList />, document.getElementById("root"));

/*
its the same css from a4
*/
