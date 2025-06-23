// document
//   .getElementById('getHacked')
//   .addEventListener('click', () => alert('You have been hacked!'));

const year = new Date().getFullYear();

const addYear = () => {
  document.getElementById('year').innerText = year;
}

addYear();