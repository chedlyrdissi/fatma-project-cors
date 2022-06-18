 // api url
const api_url =
	"https://d1s141fbt1.execute-api.us-east-1.amazonaws.com/dev/vehicles";

async function fetchData(url) {
	return new Promise((resolve, reject) => {
		const headers = new Headers();
		headers.append("Access-Control-Allow-Origin", "*");
		headers.append("Access-Control-Allow-Credentials", true);
		headers.append("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
		headers.append("Access-Control-Allow-Headers", "Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");

// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Credentials: true ");
// header("Access-Control-Allow-Methods: OPTIONS, GET, POST");
// header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");

		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
			headers,
		};

		fetch(url, requestOptions)
		  .then(response => response.text())
		  .then(result => resolve(result))
		  .catch(error => reject(error));
	});
}

// Defining async function
async function getapi(url) {
	
	// Storing response
	// const response = await fetch (url,{mode: 'no-cors'});
	try {
		const data = await fetchData(url);
		show(data);
	} catch (error) {
		console.log('Failed to fetch data', error);
	}
	// // Storing data in form of JSON
	// var data = await response.json();
	// console.log(data);	
	// show(data);
}

// Calling that async function
getapi(api_url);

// Function to hide the loader

// Function to define innerHTML for HTML table
function show(data) {

	const options = data.results.map(({ fleet_id }) => `<option value=${fleet_id}>${fleet_id}</option>`);
	const tab = `<select name="model" id="model-select">${options}</select>`;
	document.getElementById('vehicles').innerHTML = tab;

	// let tab ='<select name="model" id="model-select">' ;
	// var result= Object.values(data.results);
	// for(let r in result){
	// 	tab+='<option value=';
	// 	tab+=result[r].fleet_id
	// 	tab+='> '+ result[r].fleet_id+ '</option>';
	// }
	// tab+='</select>'
	// document.getElementById('vehicles').innerHTML =tab;
}

