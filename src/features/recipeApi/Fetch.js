// class Fetch {
// 	constructor() {
// 		this.app_id = app_id;
// 		this.api_key = '14160cdf88bba4b17caa58f0fa1da26e'; //hardcode for now then create config file with .env variable...dont forget to import npm as well. ??
// 		// this.search_keyword = search_keyword;
// 	}

// 	async fetchData() {
// 		const response = await fetch(
// 			`https://api.edamam.com/doc/open-api/recipe-search-v2.json?app_id=${this.app_id}&app_key=${this.api_key}&q=${this.search_keyword}`
// 		);
// 		console.log(response);

// 		const data = await response.json();
// 		console.log(data);

// 		// return responseData;
// 	}
// }
// class Fetch {
// 	constructor() {
// 		this.app_id = '4b64e305';
// 		this.api_key = '14160cdf88bba4b17caa58f0fa1da26e'; //hardcode for now then create config file with .env variable...dont forget to import npm as well. ??
// 		// 	this.search_keyword = search_keyword;
// 	}
// }

// let app_id = '4b64e305';
// let app_key = '14160cdf88bba4b17caa58f0fa1da26e';
async function fetchData() {
	let response = await fetch(
		// `https://api.edamam.com/api/recipes/v2?type=user&q=pizza&app_id=${this.app_id}&app_key=${this.api_key}`

		`https://api.edamam.com/api/recipes/v2?type=user&q=pizza&app_id=4b64e305&app_key=14160cdf88bba4b17caa58f0fa1da26e`
	);

	console.log(response);

	let data = await response.json();
	console.log(data);
}

fetchData();
