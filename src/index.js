import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

function AlbumList() {
  return (
    <section className="albumlist">
      <Album />
      <Album />
    </section>
  )
}

const artist = 'Bangtan Sonyeondan'
const Album = () => {
  const title = 'The Most Beautiful Moment In Life PT. 2'
  return (
    <article className="album">
      <img
        className="imgAlbum"
        src="https://upload.wikimedia.org/wikipedia/pt/8/8f/The_Most_Beautiful_Moment_in_Life%2C_Part_2_-_%28EP%29.jpg"
        alt="The Most Beautiful Moment in Life PT. 2"
      />
      <h1>{title}</h1>
      <h3>{artist.toUpperCase()}</h3>
    </article>
  )
}

ReactDom.render(<AlbumList />, document.getElementById('root'))
