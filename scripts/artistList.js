import { artists } from '/data/artists.js';

const artistList = artists.map(
  (artist) =>
    `<li class="list-group-item artist-item"><a href="/artists/details.html?id=${artist.artistId}">${artist.artistName}</a></li>`
);

document.getElementById('artistList').innerHTML = `${artistList.join('')}`;
