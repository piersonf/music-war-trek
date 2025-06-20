import { artists } from '/data/artists.js';

const artistList = artists.map(
  (artist) =>
    `<li><a href="/artists/details.html?id=${artist.artistId}">${artist.artistName}</a></li>`
);

document.getElementById('artistList').innerHTML = `${artistList.join('')}`;
