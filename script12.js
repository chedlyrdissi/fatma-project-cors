 // api url
const api_url =
	"https://d1s141fbt1.execute-api.us-east-1.amazonaws.com/dev/vehicles";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch (url,{mode: 'no-cors'});
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);
	
	show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader

// Function to define innerHTML for HTML table
function show(data) {
	
	let tab ='<select name="model" id="model-select">' ;
	var result= Object.values(data.results);
	for(let r in result){
tab+='<option value=';
tab+=result[r].fleet_id
tab+='> '+ result[r].fleet_id+ '</option>';
	
	


	}
	tab+='</select>'
		document.getElementById('vehicles').innerHTML =tab;

	
	

}
