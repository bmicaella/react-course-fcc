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

const Title = () => <h1>The Most Beautiful Moment In Life PT. 2</h1>;
const Artist = () => <h3>Bangtan Sonyeondan</h3>;

ReactDom.render(<AlbumList />, document.getElementById("root"));

/*
* {
  margin: 0;
  padding: 0;
}

body {
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background: linear-gradient(75deg, rgb(146, 145, 238), rgb(141, 242, 215));
  background-repeat: fixed;
  color: black;
}

.albumlist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

.imgAlbum {
  width: 200px;
  height: 200px;
  border: 2px solid rgb(141, 242, 215);
}

.album {
  background: white;
  border-radius: 1rem;
  padding: 1rem 2rem;
}

.album h1 {
  margin-top: 0.5rem;
}

@media screen and (min-width: 768px) {
  .albumlist {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}

*/
