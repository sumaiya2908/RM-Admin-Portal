import Axios from 'axios';

function getRequest(url, setFunction) {
	const res = Axios.get(url)
		.then(({ data }) => setFunction(data))
		.catch((err) => console.error(err))
}

export default getRequest