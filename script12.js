 // api url
const api_url = "https://d1s141fbt1.execute-api.us-east-1.amazonaws.com/dev/vehicles";

async function fetchData(url) {
	return new Promise((resolve, reject) => {
		const requestOptions = {
			method: 'GET',
			redirect: 'follow',
		};

		fetch(`https://cors.io/?${url}`, requestOptions)
		  .then(response => response.text())
		  .then(result => resolve(result))
		  .catch(error => reject(error));
	});
}

// Defining async function
async function getapi(url) {
	try {
		const data = await fetchData(url);
		show(data);
	} catch (error) {
		console.log('Failed to fetch data', error);
	}
	// Storing response
	// const response = await fetch (url,{mode: 'no-cors'});
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

