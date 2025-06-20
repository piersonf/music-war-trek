
async function getData() {
    // Use fetch to retrieve data over the network from an API endpoint
	const jsonData = await fetch('http://localhost:3000/artists/artists.json').then(res => res.json());
	updateHTML(jsonData);  // Update HTML after data is fetched
};

function updateHTML(jsonData) {
    let curr_url = window.location.href;
    let artist_id = curr_url.substring(curr_url.indexOf("?")+4);
    let artist = jsonData[artist_id];

    for(let key of Object.keys(artist)){
        document.getElementById(`${key}Span`).innerHTML = artist[key];
    }
}

getData();
