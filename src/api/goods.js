export const getGoods = () => {
	const url = 'https://run.mocky.io/v3/f006aedb-53ba-4202-aa77-a5c56575c953';
	return fetch(url)
	.then(function (response) {
	  return response.json()
	})
	.then(function (data) {
	  console.log('data', data)
	})
}