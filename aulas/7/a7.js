/* 
***1st***

//setup variables
const title = 'The Most Beautiful Moment In Life PT. 2'
const artist = 'Bangtan Sonyeondan'
const img =
  'https://upload.wikimedia.org/wikipedia/pt/8/8f/The_Most_Beautiful_Moment_in_Life%2C_Part_2_-_%28EP%29.jpg'

function AlbumList() {
  //here we are rendering the props object
  return (
    <section className="albumlist">
      <Album quality="top notch" reviews={7} wins={title} />
      <Album stars="unlimited" reviews={13} />
    </section>
  )
}

const Album = (props) => {
  //here we are accessing the props object
  return (
    <article className="album">
      <img
        className="imgAlbum"
        src={img}
        alt="The Most Beautiful Moment in Life PT. 2"
      />
      <h1>{title}</h1>
      <h3>{artist.toUpperCase()}</h3>
      <p>{props.quality}</p>
      <p>{props.wins}</p>
      {
        //this will show quality only in the item that has that property. in this case, only in album 1}
      }
      <p>{props.stars}</p>
      {
        //this will thow stars only in the 2nd album, because thats the one that has that property
      }
      <p>{props.reviews}</p>
    </article>
  )
}

*/

/* 
***2nd***

import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

const firstAlbum = {
  title: 'The Most Beautiful Moment In Life PT. 2',
  artist: 'Bangtan Sonyeondan',
  img:
    'https://upload.wikimedia.org/wikipedia/pt/8/8f/The_Most_Beautiful_Moment_in_Life%2C_Part_2_-_%28EP%29.jpg',
}

const secondAlbum = {
  title: 'Love Yourself: Tear',
  artist: 'Bangtan Sonyeondan',
  img:
    'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/BTS_-_Love_Yourself_Tear.jpeg/220px-BTS_-_Love_Yourself_Tear.jpeg',
}

function AlbumList() {
  //here we are rendering the props object
  return (
    <section className="albumlist">
      <Album
        title={firstAlbum.title}
        artist={firstAlbum.artist}
        img={firstAlbum.img}
      />
      <Album
        title={secondAlbum.title}
        artist={secondAlbum.artist}
        img={secondAlbum.img}
      />
    </section>
  )
}

const Album = (props) => {
  //here we are accessing the props object
  return (
    <article className="album">
      <img
        className="imgAlbum"
        src={props.img}
        alt="The Most Beautiful Moment in Life PT. 2"
      />
      <h1>{props.title}</h1>
      <h3>{props.artist.toUpperCase()}</h3>
    </article>
  )
}

ReactDom.render(<AlbumList />, document.getElementById('root'))

*/
