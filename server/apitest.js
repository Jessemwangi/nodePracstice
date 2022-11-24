const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://flight-fare-search.p.rapidapi.com/v2/flight/',
  params: {
    from: 'LHR',
    to: 'DXB',
    date: '2022-11-09',
    adult: '1',
    type: 'economy',
    currency: 'USD'
  },
  headers: {
    'X-RapidAPI-Key': '1f51a6c053mshc95b5e90c00c2b6p1290ebjsn39db53b25d8b',
    'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

// USING fetch

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1f51a6c053mshc95b5e90c00c2b6p1290ebjsn39db53b25d8b',
// 		'X-RapidAPI-Host': 'flight-fare-search.p.rapidapi.com'
// 	}
// };

// fetch('https://flight-fare-search.p.rapidapi.com/v2/flight/?from=LHR&to=DXB&date=2022-11-09&adult=1&type=economy&currency=USD', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));