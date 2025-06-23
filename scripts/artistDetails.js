import { artists } from '/data/artists.js';

const urlParams = new URLSearchParams(window.location.search);
const artistId = urlParams.get('id');
console.log(`getting ${artistId}`);

const thisArtist = artists.find((artist) => artist.artistId === artistId);

console.log(thisArtist);
delete thisArtist['artistId'];
for (let property in thisArtist) {
  document.getElementById(property).innerHTML = thisArtist[property];
}
