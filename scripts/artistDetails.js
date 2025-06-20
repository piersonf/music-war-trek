import { artists } from '/data/artists.js';

const urlParams = new URLSearchParams(window.location.search);
const artistId = urlParams.get('id');
console.log(`getting ${artistId}`);
const thisArtist = artists.find((artist) => artist.artistId === artistId);
console.log(thisArtist);
document.getElementById('artistName').innerHTML = thisArtist.artistName;
document.getElementById('artistDescription').innerHTML =
  thisArtist.artistDescription;
document.getElementById('artistStrength').innerHTML = thisArtist.artistStrength;
document.getElementById('artistCharisma').innerHTML = thisArtist.artistCharisma;
document.getElementById('artistAlignment').innerHTML =
  thisArtist.artistAlignment;
document.getElementById('artistIntelligence').innerHTML =
  thisArtist.artistIntelligence;
document.getElementById('artistSpecialPowers').innerHTML =
  thisArtist.artistSpecialPowers;
