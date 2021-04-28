import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const albums = [
  {
    id: 1,
    title: 'The Most Beautiful Moment In Life PT. 2',
    artist: 'Bangtan Sonyeondan',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/8/8f/The_Most_Beautiful_Moment_in_Life%2C_Part_2_-_%28EP%29.jpg',
  },
  {
    id: 2,
    title: 'Love Yourself: Tear',
    artist: 'Bangtan Sonyeondan',
    img:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/BTS_-_Love_Yourself_Tear.jpeg/220px-BTS_-_Love_Yourself_Tear.jpeg',
  },
  {
    id: 3,
    title: 'Dark&Wild',
    artist: 'Bangtan Sonyeondan',
    img:
      'https://ibighit.com/bts/images/bts/discography/dark_and_wild/album-cover.jpg',
  },
]

const Album = (props) => {
  const { title, artist, img } = props.album
  return (
    <article className="album">
      <img className="imgAlbum" src={img} alt={title} />
      <h1>{title}</h1>
      <h3>{artist}</h3>
    </article>
  )
}

function AlbumList() {
  return (
    <section className="albumlist">
      {albums.map((album) => {
        return <Album key={album.id} album={album}></Album>
      })}
    </section>
  )
}

ReactDom.render(<AlbumList />, document.getElementById('root'))
