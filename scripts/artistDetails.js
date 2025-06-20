import { artists } from '/data/artists.js';

const urlParams = new URLSearchParams(window.location.search);
const artistId = urlParams.get('id');
console.log(`getting ${artistId}`);

const thisArtist = artists.find((artist) => artist.artistId === artistId);

if (thisArtist) {
  const {
    artistName,
    artistDescription,
    artistStrength,
    artistCharisma,
    artistAlignment,
    artistIntelligence,
    artistSpecialPowers
  } = thisArtist;

  const artistNameElement = document.getElementById('artistName');
  const artistDescriptionElement = document.getElementById('artistDescription');
  const artistStrengthElement = document.getElementById('artistStrength');
  const artistCharismaElement = document.getElementById('artistCharisma');
  const artistAlignmentElement = document.getElementById('artistAlignment');
  const artistIntelligenceElement = document.getElementById('artistIntelligence');
  const artistSpecialPowersElement = document.getElementById('artistSpecialPowers');

  artistNameElement.innerHTML = artistName;
  artistDescriptionElement.innerHTML = artistDescription;
  artistStrengthElement.innerHTML = artistStrength;
  artistCharismaElement.innerHTML = artistCharisma;
  artistAlignmentElement.innerHTML = artistAlignment;
  artistIntelligenceElement.innerHTML = artistIntelligence;
  artistSpecialPowersElement.innerHTML = artistSpecialPowers;
} else {
  console.error('Artist not found in database');
}
/*console.log(thisArtist);
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
  thisArtist.artistSpecialPowers;*/
